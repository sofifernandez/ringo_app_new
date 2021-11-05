
import { NavLink } from "react-router-dom";
export const ViewCart = ({quantity}) => {
  
  return (
    <div className="col-10 col-sm-9 col-lg-8 row justify-content-center align-content-center justify-self-center mx-0">
      <button className="col-9 col-sm-8 justify-self-center btn-Carrito mt-1">
          <NavLink to='/cart' style={{ color:'inherit' }}>Ver carrito: {quantity} item/s</NavLink>
      </button>
    </div>
  )
}