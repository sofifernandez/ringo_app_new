import './Css/App.css'
import {NavBar} from './components/NavBar/NavBar.js'
import { CartWidget } from "./components/CartWidget/CartWidget"
//import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"
//import galeriaAnillos from "./images/anillos1.svg"
//import galeriaAros from "./images/aros1_1.svg"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <body className="container-fluid px-0">
      <header className="App-header">
        <NavBar>
          <CartWidget contadorCarrito='?' /> 
        </NavBar>
      </header>

      <main className='container-fluid row justify-content-center mt-0 mx-0 px-0 mb-5'>
       
        {/* Galeria anillos
        <div className="col-12 mt-2 mt-md-5">
            <img id="cartel" className="img-fluid col-12 gx-0" src={galeriaAnillos} alt="BW"/>
        </div>
        <div className="mt-4 md-2 mb-md-5 row justify-content-center col-11 col-md-8" id='contenedorAnillos'>
            <ItemListContainer tipo={'ANILLO'} />
        </div>

        Galleria Aros
        <div className="col-12 mt-2 mt-md-5">
            <img id="cartel" className="img-fluid col-12 gx-0" src={galeriaAros} alt="BW"/>
        </div>
        <div className="mt-4 md- 2mb-md-5 row justify-content-center col-11 col-md-8" id='contenedorAros'>
        <ItemListContainer tipo={'ARO'} />
        </div> */}
        
        <ItemDetailContainer/>

      </main>
      
    </body>
  );
}

export default App;
