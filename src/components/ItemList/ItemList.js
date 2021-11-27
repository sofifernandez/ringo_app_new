import "./ItemList.scss"
import {useState,  useContext} from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { NavLink } from "react-router-dom";
import CartContext from "../../contexts/cart/CartContext";
import { StockHandler } from "../StockHandler/StockHandler";
import { Sizes } from "../Sizes/Sizes";


export const ItemList = ({ product }) => {
  const { addToCart, showCart } = useContext(CartContext);
  const [sizeToCart, setsizeToCart] = useState("");

  const onAddHandle = (counter) => {
    if (counter > 0) {
      showCart(true)
      if (sizeToCart === '') {
        alert('por favor selecciona un talle')
      } else {
        addToCart(product, counter, sizeToCart)
      }
    }
  };


  
   
  return (
    <div className="row justify-content-center col-12 col-sm-6 mb-5">
      <NavLink to={`/producto/${product.id}`}><img className="card-img-top img-fluid" src={product.imagen} alt="S" /></NavLink>
      <div className="card-body col-11">
        <p className="card-text nombreProducto">
          <b>{product.nombre}</b>
        </p>
        <p className="card-text precioProducto">
          <b>${product.precio}</b>
        </p>
        {/* <!-- Availability --> */}
          <StockHandler item={product} onHandleStock={onAddHandle}></StockHandler>
      </div>
      {/* Talles */}
      <div className="col-11 col-sm-9 col-md-7 dropdown mb-2 px-2 row justify-content-center">
        <Sizes sizeToCart={setsizeToCart}></Sizes>
      </div>
      <ItemCount inicial={0} stock={product.stock} ID={product.id} onAdd={onAddHandle} />
    </div>
  );
};
