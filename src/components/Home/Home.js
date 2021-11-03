import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import galeriaAnillos from "../../images/anillos1.svg"
import galeriaAros from "../../images/aros1_1.svg"

export const Home = (() => {
    return (
        <>
            {/* Galeria anillos*/}
            <div className="col-12 mt-2 mt-md-5">
                <img id="cartel" className="img-fluid col-12 gx-0" src={galeriaAnillos} alt="BW" />
            </div>
            <ItemListContainer tipoHOME={'anillos'} />

            {/*Galleria Aros*/}
            <div className="col-12 mt-2 mt-md-5">
                <img id="cartel" className="img-fluid col-12 gx-0" src={galeriaAros} alt="BW" />
            </div>
            <ItemListContainer tipoHOME={'aros'} />
        </>    
        
    )
})