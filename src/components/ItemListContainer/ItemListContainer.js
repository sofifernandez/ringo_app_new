import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import Products from "../../productos.json";
import { useParams } from "react-router-dom";


export const ItemListContainer = ({ tipoHOME }) => {
  const { tipoID } = useParams();

  const [productos, setProductos] = useState([]);

  const getData = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("No se encontro nada");
        }
      }, 1000);
    });

  useEffect(() => {
    getData(Products)
      .then((res) => {
        tipoHOME ? setProductos(res.filter((product) => product.tipo === tipoHOME)) : setProductos(Products) || //esto para el HOME
          tipoID ? setProductos(res.filter((product) => product.tipo === tipoID)) : setProductos(Products) //esto para las categorias
          ;
      })
      .catch((err) => console.log(err));
  }, [tipoHOME, tipoID]);


  return (
    <>
      <div className='container-fluid row justify-content-center mt-0 mx-0 px-0 mb-5'>
        <div className="mt-4 mb-md-5 mx-0 container-fluid row justify-content-center justify-self-center col-11 col-md-9">

          {productos.length
            ? productos.map((producto) => (

              <ItemList product={producto} key={producto.id} />

            ))
            : "Loading..."
          }
        </div>
      </div>
    </>
  );
};


