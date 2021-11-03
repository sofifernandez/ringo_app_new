import './App.css'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {NavBar} from './components/NavBar/NavBar.js'
import { Home } from "./components/Home/Home"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import {Footer} from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path="/tipo/:tipoID">
          <ItemListContainer/>
        </Route>
        <Route exact path="/producto/:productoID">
          <ItemDetailContainer/>
        </Route>
        <Route path="/*">
          <h1>Página no encontrada</h1>
        </Route>
      </Switch>
    <Footer/>
    </BrowserRouter>

  );
}

export default App;
