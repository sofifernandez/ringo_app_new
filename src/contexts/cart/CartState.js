import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_CART, ADD_TO_CART, REMOVE_ITEM, DELETE_CART } from "../Types";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const CartState = ({ children }) => {

  const initalState = {
    isCart: false,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const MySwal = withReactContent(Swal);

  const addToCart = (item, counter, size) => {
    const existe = state.cartItems.some(el => el.id === item.id);
    if (existe) {
      const objIndex = state.cartItems.findIndex((obj => obj.id === item.id))
      const newQuantity = state.cartItems[objIndex].quantity + counter
      if (newQuantity <= state.cartItems[objIndex].stock) {
        state.cartItems[objIndex].quantity += counter
        state.cartItems[objIndex].total = state.cartItems[objIndex].precio * state.cartItems[objIndex].quantity
        let nuevosTalles= Array(counter).fill(size)
        state.cartItems[objIndex].talle = [...state.cartItems[objIndex].talle.concat(nuevosTalles)]
        MySwal.fire({
            icon: 'success',
            text: `Agregaste ${item.nombre} de nuevo al carrito`,
            imageUrl: `${item.imagen}`,
            imageWidth: 100,
            imageHeight: 100,
            timer: 1300,
            showConfirmButton: false,

      })
      } else if (newQuantity > state.cartItems[objIndex].stock) {
        MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Queda/n ${state.cartItems[objIndex].stock- state.cartItems[objIndex].quantity} disponibles`,
        })
      }
      
    } else {
      item = {
        ...item,
        quantity: counter,
        total: item.precio * counter,
        talle: Array(counter).fill(size)
      }
      dispatch({ type: ADD_TO_CART, payload: item });
      MySwal.fire({
            icon: 'success',
            text: `Agregaste ${item.nombre} al carrito`,
            imageUrl: `${item.imagen}`,
            imageWidth: 100,
            imageHeight: 100,
            timer: 1300,
            showConfirmButton: false,

      })
    };

  };

  const showCart = () => {
    dispatch({ type: SHOW_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const deleteCart = () => {
    state.cartItems=[]
    dispatch({ type: DELETE_CART })
  }

  return (
    <CartContext.Provider
      value={{
        isCart: state.isCart,
        cartItems: state.cartItems,
        addToCart,
        showCart,
        removeItem,
        deleteCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


