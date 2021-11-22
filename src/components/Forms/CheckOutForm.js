import { useState } from "react";
import {
    doc,
    collection,
    addDoc,
    updateDoc,
} from "firebase/firestore";
import { getFirestore } from "../../firebase/index";



export const CheckOutForm = ({ finalPurchase, totalCompra, HandleDeleteCart }) => {

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
                addDoc(orderInfo, newOrder).then(({ id }) => alert('Gracias por tu compra! El código es: ' + id));
                // actualizar el stock en la base de datos (incomprobable pero prometo que funciona!)
                finalPurchase.forEach((item) => {
                    const docRef = doc(db, "items", item.id);
                    updateDoc(docRef, { stock: item.stock-item.quantity});
                });
                HandleDeleteCart()
                                

            }
            

            else if (!buyer.userName.match(nameFormat)) {
                alert('Por favor ingresa un nombre válido')
            }
            
            else if (!buyer.userEmail.match(mailFormat)) {
                alert('Por favor ingresa un mail válido')
            }
            
            else if (!buyer.userPhone.match(phoneFormat)) {
                alert('Por favor escribe un número de teléfono válido')
            }
            else if (buyer.userComments.length>0 && !buyer.userComments.match(messFormat)) {
                alert('Por favor escribe hasta 250 caracteres')
            }

        } catch (err) {
            console.error(err);
        };
    }

    return (
        <form onSubmit={onHandleSubmit} className="row justify-content-center" name='formMensaje' id='formMensaje'>
            <div className="col-11 mb-2 row justify-content-center">
                <div className="form-group row">
                    <input type="text" placeholder="Nombre*" id="nombre" className="mb-1" name='userName' onChange={handleBuyerChange} />
                </div>
                <div className="form-group row">
                    <input type="email" placeholder="E-mail*" id="emailContacto" className="mb-1" name='userEmail' onChange={handleBuyerChange} />
                </div>
                <div className="form-group row">
                    <input type="text" placeholder="Teléfono*" id="telefonoContacto" className="mb-1" name='userPhone' onChange={handleBuyerChange} />
                </div>
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