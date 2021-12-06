import "./CartWidget.scss"
import CartContext from "../../contexts/cart/CartContext";
import { useContext, useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

export const CartWidget = () => {
    const { cartItems, isCart } = useContext(CartContext);
    const [totalItems, setTotalItems]=useState(0)
    
    const total = cartItems.reduce(function (a, b) { return a + b.quantity; }, 0);
    
      useEffect(() => {
        setTotalItems(cartItems.reduce(function (a, b) { return a + b.quantity; }, 0))
      }, [cartItems, total])

    return (
        <NavLink className='px-1 cart__icon row' href="carrito_tabla.html" id='btnCarritoNav' to='/cart'>
            <i className="fas fa-shopping-cart">
                {isCart && totalItems > 0 ?
                    (<span className="badge rounded-pill animate__animated animate__zoomIn" id="lblCartCount">{totalItems}</span>) : null}
            </i>
        </NavLink>

    )
}