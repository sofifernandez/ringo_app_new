import './Cart.scss'
import { useContext, useState } from "react";
import CartContext from "../../contexts/cart/CartContext";
import { CartItem } from "./CartItem";
import { NavLink } from "react-router-dom";

export const Cart = () => {
  const { cartItems, initalState } = useContext(CartContext);
  const [cartTotal, setCartTotal]= useState(cartItems.reduce((amount, item) => item.total + amount, 0))

  return (
    <main className='row container-fluid justify-content-center my-5'>
      {cartItems.length !== 0 ? (
        <div className='row justify-content-center'>

          {cartItems.map((item) => (<CartItem key={item.id} item={item} onRefresh={()=>setCartTotal(cartItems.reduce((amount, item) => item.total + amount, 0)) }/>))}
          <hr />
          {/* Total */}
          <div className="row justify-content-center col-10 col-sm-6 col-md-4 text-center my-5">
            <div className="cart-summary pt-3">
              <p className="text-center mb-4 fs-3">Final</p>
              <ul className="summary-table px-2">
                <li className="mb-4"><span className='fs-5'><b>Subtotal:</b></span> <span className='fs-5'>${cartTotal*0.78}</span></li>
                <li className="mb-4"><span className='fs-5'><b>IVA:</b></span> <span className='fs-5'>${cartTotal*0.22}</span></li>
                <hr />
                <li className="mb-4"><span className='fs-5'><b>Total: </b></span>
                  <span className='fs-5'>${cartTotal}</span></li>
              </ul>
              <div className="cart-btn mt-100">
                <button className='mt-5 col-7 col-lg-5 btnCheckout mb-1 fs-4'>Checkout</button>
              </div>
            </div>
            <div className="justify-content-between row mb-5">
              <button className='mt-5 col-6 col-sm-4 btnVaciar' onClick={()=>initalState}><a href='/'> Vaciar carrito</a></button>
              <button className='mt-5 col-6 col-sm-5 btnSeguirComprando'><NavLink className='fs-6' to={'/'}>Seguir
            comprando</NavLink></button>

            </div>
          </div>
        </div>
      ) : (<div className='row justify-content-center my-5'>
        <ol className="list-group col-10 col-md-6">
          <li className="list-group-item row justify-content-between align-content-center">
            <div className="ms-2 me-auto">
              <div className="fw-bold fs-5">Aún no has agregado artículos a tu compra</div>
              $0
            </div>
          </li>
          <button className="btn col-6 col-lg-4 mt-3 btnSeguirComprando"><NavLink className='fs-6' to={'/'}>Seguir
            comprando</NavLink></button>
        </ol>
      </div>)}
    </main>
  );
};

