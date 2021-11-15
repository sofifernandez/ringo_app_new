import { useEffect, useState } from "react";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import Products from "../../productos.json";
import { useParams } from "react-router-dom";
//import { collection, getDocs } from "firebase/firestore";
//import { getFirestore } from "./firebase";


export const ItemDetailContainer = () => {
  const { productoID } = useParams();
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
        productoID ? setItem(res.find((item) => item.id === productoID)) : setItem(Products);
      })
      .catch((err) => console.log(err));
  }, [productoID]);

  
  return (
    <>
      <main className='container-fluid row justify-content-center mt-0 mx-0 px-0 mb-5'>
        {item? <ItemDetail item={item} key={item.id} />: "Loading..."}
      </main>
    </>
  );
};

