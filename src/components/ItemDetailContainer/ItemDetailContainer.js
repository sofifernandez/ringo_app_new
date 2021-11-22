import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { getFirestore } from "../../firebase/index";


export const ItemDetailContainer = () => {

  const { productoID } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
  	//traigo la base de datos
  	const db = getFirestore();
  		const theItem = doc(db, 'items', productoID);
  		getDoc(theItem).then((snapshot) => {
  			if (snapshot.exists()) {
  				setItem(snapshot.data());
  			}
  		});
  	
  }, [productoID]);

  return (
    <>
      <main className='container-fluid row justify-content-center mt-0 mx-0 px-0 mb-5'>
        {item ? <ItemDetail item={item} key={item.id} /> : "Loading..."}
      </main>
    </>
  );
};

