import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, DELETE_CART } from "../Types";

export const CartState = ({ children }) => {

  const initalState = {
    showCart: false,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item, counter) => {
    const existe = state.cartItems.some(el => el.id === item.id);
    if (existe) {
      let objIndex = state.cartItems.findIndex((obj => obj.id === item.id))
      state.cartItems[objIndex].quantity += counter
      state.cartItems[objIndex].total = state.cartItems[objIndex].precio * state.cartItems[objIndex].quantity
    } else {
      item = { ...item, quantity: counter }
      item.total = item.precio * item.quantity
      dispatch({ type: ADD_TO_CART, payload: item });
    };

  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
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
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
        deleteCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


