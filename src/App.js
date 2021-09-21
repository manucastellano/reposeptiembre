import * as React from "react"
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/CartWidget/CartWidjet';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {

  

  return (
    
    <div className="App">
        <Nav />

        <Header/>
        
        <ItemListContainer saludo='HOLA! Bienvenido a la nueva pagina'/>

        </div>
  );
}

export default App;
