
import { ItemCount } from "../ItemCount/ItemCount";
import CartContext from "../../contexts/cart/CartContext";
import React, { useState, useContext } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Sizes } from "../Sizes/Sizes";


export const CartItem = ({ item, onRefresh }) => {
    const { removeItem, addToCart, addRemoveSize} = useContext(CartContext);
    const [itemTotal, setItemTotal] = useState(item.total);
    const [numberSizes, setNumberSizes] = useState(item.quantity)

    const MySwal = withReactContent(Swal)
    const handleRemove = () => {
        MySwal.fire({
            html: `¿Estás seguro/a que deseas eliminar ${item.nombre} del carrito de compras?`,
            showDenyButton: true,
            confirmButtonText: 'Sí',
            denyButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {
                removeItem(item.id)
            }
        })
    }
    const onAddHandle = (counter, itemTotal, onCartPage, removeSize) => {
        addToCart(item, counter, onCartPage = true)
        setItemTotal(item.total)
        onRefresh(itemTotal)
        setNumberSizes(item.quantity)
        if (numberSizes > item.quantity) {
            addRemoveSize(removeSize = true, item.quantity, item.id)
        }
    };

    return (
        // Item Start
        <div className="container-fluid row col-12 col-lg-10 mt-4 mt-md-5 align-content-center justify-content-center">
            <div className="col-12 col-md-4 justify-self-start">
                <img className="img-fluid" src={item.imagen} alt="s" />
            </div>
            <div className="col-12 col-md-6 mb-3 row justify-content-center">

                {/* <!-- Product Meta Data --> */}
                <div className="product-meta-data mb-3">
                    <div className="line"></div>
                    <p className="product-price">${item.precio}</p>

                    <div className='row'>
                        <h3 className='col-8 col-sm-6'>{item.nombre}</h3>
                    </div>

                    {/* <!-- Avaiable --> */}
                    <p className="available">
                        <i className="fa fa-circle"></i> Disponibles para tu compra: {item.stock}</p>

                </div>


                <p className='col-12 col-md-3 fs-5 product-price'>Cantidad:</p>
                <div className='col-12 col-md-9 my-1'><ItemCount inicial={item.quantity} stock={item.stock} id={item.id} onAdd={onAddHandle} onCart={true} /></div>
                <p className='fs-5 my-2 product-price'>Total= ${itemTotal} </p>
                {/* Talles */}
                {item.tipo === 'anillos' ?
                    <><hr></hr><p className='fs-5 product-price'>Talles:</p><div className='d-flex flex-wrap justify-content-center'>
                        {Array.from({ length: numberSizes }, (_, i) => <Sizes key={i} refer={i} parentItem={item.id} ID={item.id + '_' + i} />)}
                    </div><hr></hr></> : null}
                <div>
                    <button className="btn btn-danger btn-sm botonAccion my-2 fs-6 col-4 col-sm-3 justify-self-start" id='accionEliminar' onClick={handleRemove}>
                        <i className="far fa-trash-alt mx-1"></i>
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}