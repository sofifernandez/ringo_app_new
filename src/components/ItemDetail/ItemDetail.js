import "./ItemDetail.scss"
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
//import { ViewCart } from "../ViewCart/ViewCart";
import CartContext from "../../contexts/cart/CartContext";

export const ItemDetail = ({ item }) => {
  const { addToCart, showHideCart } = useContext(CartContext);

const onAddHandle = (counter) => {
  showHideCart(false)
  addToCart(item, counter)
};


  return (
    <div className="container-fluid row col-11 col-sm-9 mt-5 align-content-center justify-content-center">
      <div className="col-12 col-lg-7 align-self-center">
        <img className="img-fluid" src={item.imagen} alt="s" />
      </div>
      <div className="col-12 col-lg-5 mb-3 row justify-content-center">
        <div className="single_product_desc row justify-content-center">
          {/* <!-- Product Meta Data --> */}
          <div className="product-meta-data mb-3">
            <div className="line"></div>
            <p className="product-price">${item.precio}</p>

            <h3>{item.nombre}</h3>

            {/* <!-- Ratings & Review --> */}
            <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
              <div className="ratings">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
              </div>
              <div className="review">
                <a href="/#">Escribe una reseña</a>
              </div>
            </div>
            {/* <!-- Avaiable --> */}
            <p className="avaibility">
              <i className="fa fa-circle"></i> Hay stock
            </p>

          </div>
          {/* Talles */}
          <div className="col-12 dropdown mb-2 px-2 row justify-content-start">
            <button
              className="btn btn-secondary dropdown-toggle col-5"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Talle
            </button>
            <ul
              className="dropdown-menu menuTalles"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a className="dropdown-item" href="/#">
                  <b>4</b> <span style={{ fontSize: `80%` }}>(14,9 mm)</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  <b>5</b> <span style={{ fontSize: `80%` }}>(15,6 mm)</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  <b>6</b> <span style={{ fontSize: `80%` }}>(16,5 mm)</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  <b>7</b> <span style={{ fontSize: `80%` }}>(17,2 mm)</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  <b>8</b> <span style={{ fontSize: `80%` }}>(18,0 mm)</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  <b>9</b> <span style={{ fontSize: `80%` }}>(18,9 mm)</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  <b>10</b> <span style={{ fontSize: `80%` }}>(19,7 mm)</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  <b>11</b> <span style={{ fontSize: `80%` }}>(20,6 mm)</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  <b>12</b> <span style={{ fontSize: `80%` }}>(21,5 mm)</span>
                </a>
              </li>
            </ul>
          </div>
          {/* Descripcion */}
          <div className="short_overview my-5">
            <p>
              {item.description}
            </p>
          </div>

          {/* <!-- Add to Cart Form --> */}
          {<ItemCount inicial={0} stock={item.stock} id={item.id} onAdd={onAddHandle} texto='Agregar al carrito' /> }
        </div>
        
      </div>
      <button className="btn col-6 col-lg-3 mt-3 btnSeguirComprando"><NavLink className='fs-6' to={'/'}>Volver</NavLink></button>
    </div>
  );
};
