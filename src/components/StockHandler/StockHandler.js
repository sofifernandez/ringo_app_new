import "./StockHandler.scss"
import { useContext, useState, useEffect } from "react";
import CartContext from "../../contexts/cart/CartContext";



export const StockHandler = ({ item, onHandleStock }) => {
    const { cartItems } = useContext(CartContext);
    const [prodStock, setprodStock] = useState(item.stock)

    const existe = cartItems.some(el => el.id === item.id);
    const objIndex = cartItems.findIndex((obj => obj.id === item.id))

    useEffect(() => {
        if (existe) {
            setprodStock(cartItems[objIndex].stock - cartItems[objIndex].quantity)
        } 
    }, [existe, cartItems, objIndex, onHandleStock])


    return (
        <div>
            <p className={prodStock ? "available" : "notavailable"}>
                <i className="fa fa-circle"></i> Disponibles: {prodStock}
            </p>
        </div>

    )
}