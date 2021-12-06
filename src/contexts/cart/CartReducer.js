import { SHOW_CART, ADD_TO_CART, REMOVE_ITEM, DELETE_CART, TALLES_RENDER} from "../Types";

const CartReducer = (state, action) => {
  
  switch (action.type) {
    case SHOW_CART: {
      return {
        ...state,
        isCart: true,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }
    case DELETE_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems]
      }
    }
    case TALLES_RENDER: {
      return {
        ...state,
        tallesHandler: [...state.tallesHandler],
      }
    }

    default:
      return state;
  }
};

export default CartReducer;
