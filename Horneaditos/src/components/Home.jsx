import React, { useState } from 'react'
import Colaborators from "./Colaborators"
import Finances from "./Finances"
import Inventory from "./Inventory"
import User from "./User"
import "../styles/Home.css"

const Home = () => {

  const [option, setOption] = useState("");

  const greeting = () => {
    const T = new Date().getHours();
      if( T >= 6 && T < 12){
        return "¡Buenos Dias!"
      }else if( T >= 12 && T < 18){
        return "¡Buenas Tardes!"
      }else{
        return "¡Buenas Noches!"
      }
  }

  const renderContent = () => {
    switch(option) {
      case "Colaborators":
        return <Colaborators/>;
      case "Finances":
        return <Finances/>;
      case "Inventory":
        return <Inventory/>;
      case "User":
        return <User/>;
      default:
        return <div className="greeting">{greeting()}</div>
    }
  }

  return (
    <div className='homeContainer'> 
        <aside className='lateralMenu'>
          <i>logotype</i>
          <ul>
            <li><button className='menuButton' onClick={() => setOption("Colaborators")}>Colaboradores</button></li>
            <li><button className='menuButton' onClick={() => setOption("Finances")}>Contabilidad</button></li>
            <li><button className='menuButton' onClick={() => setOption("Inventory")}>Inventario</button></li>
            <li><button className='menuButton' onClick={() => setOption("User")}>Opciones del Usuario</button></li>
          </ul>
        </aside>
        <main className='content'>{renderContent()}</main>        
    </div>
  )
}

export default Home
