import './App.css';
import './components/NavBar/NavBar.css';
import {NavBar} from './components/NavBar/NavBar.js'
import {ItemCount} from "./components/ItemCount"
import { CartWidget } from "./components/CartWidget/CartWidget"
//import React, { useState } from "react";

function App() {
  return (
    <body className="container-fluid">
      <header className="App-header">
        <NavBar>
          <CartWidget contadorCarrito='?' /> {/* Esto en algún momento quedará conectado con el agregado de productos*/}
        </NavBar>
      </header>

      <main className='container-fluid row justify-content-center'>
        <ItemCount inicial={0} stock={3} />
      </main>
      
    </body>
  );
}

export default App;
