import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { CategoryImage } from "../CategoryImage/CategoryImage"
import { collection, getDocs, query} from "firebase/firestore";
import { getFirestore } from "../../firebase/index";



export const ItemListContainer = ({ tipoHOME }) => {
  const { tipoID } = useParams();

  const [productos, setProductos] = useState([]);

	useEffect(() => {
		//Traer database
		const db = getFirestore();
		//Crear la función getItems
		async function getItems(db) {
			const itemsCol = tipoID
				? query(
						collection(db, 'items'),
				  )
				: collection(db, 'items');
			const snapshot = await getDocs(itemsCol);
      const itemsList = snapshot.docs.map((doc) => doc.data())
       tipoHOME ? setProductos(itemsList.filter((product) => product.tipo === tipoHOME)) : setProductos(itemsList) ||
        tipoID ? setProductos(itemsList.filter((product) => product.tipo === tipoID)) : setProductos(itemsList)
		}
		getItems(db);
  }, [tipoID, tipoHOME]);
  

 

  return (
    <>
      <div className='container-fluid row justify-content-center mt-0 mx-0 px-0 mb-5'>
        {/* si hay tipoID es porque estoy en la pagina de categorias, sino estoy en home y no necesito el siguiente argumento */}
        {tipoID ? <CategoryImage type={tipoID} /> : null} 
        <div className="mt-4 mb-md-5 mx-0 container-fluid row justify-content-center justify-self-center col-11 col-md-9">
          {productos.length ? productos.map((producto) => ( <ItemList product={producto} key={producto.id} />))
            : "Loading..."
          }
        </div>
      </div>
    </>
  );
};


