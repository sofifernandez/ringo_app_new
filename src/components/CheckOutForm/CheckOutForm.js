import { useState } from "react";
import {
    doc,
    collection,
    addDoc,
    updateDoc,
} from "firebase/firestore";
import { getFirestore } from "../../firebase/index";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const CheckOutForm = ({ finalPurchase, totalCompra, HandleEmptyCart }) => {

    const [buyer, setBuyer] = useState({
        userName: '',
        userEmail: '',
        userPhone: '',
        userComments: '',
    });
    // eslint-disable-next-line
    const nameFormat = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    // eslint-disable-next-line
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // eslint-disable-next-line
    const phoneFormat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    // eslint-disable-next-line
    const messFormat = /^.{1,255}$/;
    const date = new Date();
    const orderDate = date.toLocaleDateString()


    const handleBuyerChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value })
    }

    const MySwal = withReactContent(Swal)
    const alertHandler = (value) => {
        MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Por favor, ingresa un ${value} válido`,
        })
    }

    const onHandleSubmit = (e) => {
        const db = getFirestore();
        try {
            e.preventDefault();
            const newOrder = {
                buyer,
                finalPurchase,
                date: orderDate,
                totalCompra
            };

            // si están todos los datos del comprador bien
            if (buyer.userEmail.match(mailFormat) && buyer.userName.match(nameFormat) && buyer.userPhone.match(phoneFormat)) {
                const orderInfo = collection(db, "orders");
                addDoc(orderInfo, newOrder).then(({ id }) =>
                    MySwal.fire({
                        icon: 'success',
                        title: 'Gracias por tu compra!',
                        text: `Código de compra: ${id}`,
                        showConfirmButton: false,
                        timer: 1500
                    }))
                // actualizar el stock en la base de datos (incomprobable pero prometo que funciona!)
                finalPurchase.forEach((item) => {
                    const docRef = doc(db, "items", item.id);
                    updateDoc(docRef, { stock: item.stock - item.quantity });
                });
                HandleEmptyCart()
            }
            else if (!buyer.userName.match(nameFormat)) {
                alertHandler("nombre")
            }
            else if (!buyer.userEmail.match(mailFormat)) {
                alertHandler("e-mail")
            }
            else if (!buyer.userPhone.match(phoneFormat)) {
                alertHandler("número de teléfono")
            }
            else if (buyer.userComments.length > 0 && !buyer.userComments.match(messFormat)) {
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Por favor escribe hasta 250 caracteres',
                })
            }

        } catch (err) {
            console.error(err);
        };
    }

    const inputs = [
        { name: "userName", placeholder: "Nombre*" },
        { name: "userEmail", placeholder: "E-mail*" },
        { name: "userPhone", placeholder: "Teléfono*" }
    ];

    return (
        <form onSubmit={onHandleSubmit} className="row justify-content-center" name='formMensaje' id='formMensaje'>
            <div className="col-11 mb-2 row justify-content-center">
                {inputs.map((input) => (
                    <div key={input.name} className="form-group row">
                        <input
                            className="mb-1"
                            name={input.name}
                            placeholder={input.placeholder}
                            type="text"
                            onChange={handleBuyerChange}
                        />
                    </div>
                ))}
            </div>
            <div className="col-11">
                <div className="form-group row">
                    <textarea placeholder="Comentarios" rows="3" cols="35" id="mensaje"
                        name='userComments' onChange={handleBuyerChange}></textarea>
                </div>
            </div>
            <div className="cart-btn mt-100">
                <button type='submit' className='mt-5 col-7 col-lg-5 btnCheckout mb-1 fs-4'>Checkout</button>
            </div>
        </form>
    )
}