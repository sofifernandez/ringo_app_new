import { useEffect, useState } from "react";
import {ItemList} from "../ItemList/ItemList";
import Products from "../../productos.json";


export const ItemListContainer = ({tipo}) => {
  const [productos, setProductos] = useState([]);

  const getData = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("No se encontro nada");
        }
      }, 3000);
    });

  useEffect(() => {
    getData(Products)
      .then((res) => {
        setProductos(res)
      })
      .catch((err) => console.log(err));
  }, []);

  const prueba =((tipo)=>{
    let array= [...productos]
    array = array.filter(el => el.tipo === tipo)
    return array
  })

  const array = prueba(tipo)

  return (
    <>
      {array.length
        ? array.map((producto) => (
            <ItemList product={producto} key={producto.id} />
        ))
        : "Loading..."
      }      
    </>
  );
};


