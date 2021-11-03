import './App.css'
import { HashRouter, Switch, Route } from "react-router-dom";
import {NavBar} from './components/NavBar/NavBar.js'
import { CartWidget } from "./components/CartWidget/CartWidget"
import { Home } from "./components/Home/Home"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
//import { Category } from "./components/Category/Category"

function App() {
  return (
    <HashRouter>
      <NavBar>
        <CartWidget contadorCarrito='?' /> 
      </NavBar>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/tipo/:tipoID">
          <ItemListContainer/>
        </Route>
        <Route exact path="/ringo_app/producto/:productoID">
          <ItemDetailContainer/>
        </Route>
        <Route path="/*">
          <h1>Wildcard</h1>
        </Route>
      </Switch>

    </HashRouter>

  );
}

export default App;
