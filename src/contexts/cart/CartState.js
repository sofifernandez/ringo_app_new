import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_CART, ADD_TO_CART, REMOVE_ITEM, DELETE_CART, TALLES_RENDER } from "../Types";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const CartState = ({ children }) => {

  const initalState = {
    isCart: false,
    cartItems: [],
    tallesHandler: [0],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const MySwal = withReactContent(Swal);

  const addToCart = (item, counter, onCartPage = false) => {
    if (!onCartPage) {
      const existe = state.cartItems.some(el => el.id === item.id);
      if (existe) {
        const objIndex = state.cartItems.findIndex((obj => obj.id === item.id))
        const newQuantity = state.cartItems[objIndex].quantity + counter
        if (newQuantity <= state.cartItems[objIndex].stock) {
          state.cartItems[objIndex].quantity += counter
          state.cartItems[objIndex].total = state.cartItems[objIndex].precio * state.cartItems[objIndex].quantity
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
            text: `Queda/n ${state.cartItems[objIndex].stock - state.cartItems[objIndex].quantity} disponibles`,
          })
        }

      } else {
        item = {
          ...item,
          quantity: counter,
          total: item.precio * counter,
          talles: [],
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
    } else if (onCartPage) {
      const objIndex = state.cartItems.findIndex((obj => obj.id === item.id))
      state.cartItems[objIndex].quantity = counter
      state.cartItems[objIndex].total = state.cartItems[objIndex].precio * state.cartItems[objIndex].quantity 
    }
  };

  const showCart = () => {
    dispatch({ type: SHOW_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };


  const deleteCart = () => {
    state.cartItems = []
    dispatch({ type: DELETE_CART })
  }

  const addRemoveSize = (newSize, removeSize = false, itemId) => {
    if (!removeSize) {
      const { id, parentItem, refer, size } = newSize
      const objIndex = state.cartItems.findIndex((obj => obj.id === newSize.parentItem))
      const existe = state.cartItems[objIndex].talles.some(el => el.id === newSize.id)
      if (existe) {
        const objIndex2 = state.cartItems[objIndex].talles.findIndex((el => el.id === newSize.id))
        state.cartItems[objIndex].talles[objIndex2].size = size
        handleTalles() //fuerza la habilitacion del boton siguiente
      } else {
        newSize = {
          id: id,
          parentItem: parentItem,
          refer: refer,
          size: size,
          enableNext:parentItem + '_' + (refer+1)
        }
        state.cartItems[objIndex].talles = [...state.cartItems[objIndex].talles, newSize]
        handleTalles() //fuerza la habilitacion del boton siguiente
        
      }

    } else {
      const objIndex = state.cartItems.findIndex((obj => obj.id === itemId))
      if (state.cartItems[objIndex].talles.length !== state.cartItems[objIndex].quantity) {
        const cantidad = state.cartItems[objIndex].quantity 
        state.cartItems[objIndex].talles = state.cartItems[objIndex].talles.filter(i => cantidad > i.refer);
        // state.tallesHandler=state.tallesHandler.filter(i => cantidad > i)
      }
    }
  }

  // Esto fuerza a que se habiliten los siguientes botones de los talles automatizamente, tiene esa función nomas.
  // No entiendo por qué se necesita, pero si lo saco no se hace automático (solo al apretar de nuevo el '+'). 
  // No está ni en el return.
  const handleTalles = () => {
    dispatch({ type: TALLES_RENDER })
  }



  return (
    <CartContext.Provider
      value={{
        isCart: state.isCart,
        cartItems: state.cartItems,
        // tallesHandler: state.tallesHandler,
        addToCart,
        showCart,
        removeItem,
        deleteCart,
        addRemoveSize,
        // handleTalles
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


