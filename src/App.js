// import logo from './logo.svg';
import logoRingo from "./images/logo.svg";
import './App.css';
import './components/NavBar/NavBar.css';
import {NavBar} from './components/NavBar/NavBar.js'

function App() {
  return (
    <><NavBar /><div className="App">
      <img className='mt-5' src={logoRingo} alt="logo"></img>
      <header className="App-header">
        
      </header>
    </div></>
  );
}

export default App;
