import { useEffect, useState } from "react";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import Products from "../../productos.json";


export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

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
        setItem(res[1])
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      {item? <ItemDetail item={item} key={item.id} />: "Loading..."}      
    </>
  );
};

