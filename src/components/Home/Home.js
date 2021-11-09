import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import { CategoryImage } from "../CategoryImage/CategoryImage"
import BWFoto from '../../images/dibujo-2.svg'

export const Home = (() => {
    return (
        <>
            <main className="container-fluid row justify-content-center mt-0 mx-0 px-0 mb-5">
                <img className="img-fluid col-12 gx-0 mt-0 mb-3 pt-0" src={BWFoto} alt="B-W"/>
                {/* Galeria anillos*/}
            <CategoryImage type={'anillos'}/>
            <ItemListContainer tipoHOME={'anillos'} />

            {/*Galleria Aros*/}
            <CategoryImage type={'aros'}/>
            <ItemListContainer tipoHOME={'aros'} />
            </main>
            
        </>    
        
    )
})