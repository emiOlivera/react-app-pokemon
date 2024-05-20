import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bicho from "./tipos/bicho.png"
import agua from "./tipos/agua.png"
import fuego from "./tipos/fuego.png"
import hada from "./tipos/hada.png"
import dragon from "./tipos/dragon.png"
import electrico from "./tipos/electrico.png"
import fantasma from "./tipos/fantasma.png"
import hielo from "./tipos/hielo.png"
import lucha from "./tipos/lucha.png"
import normal from "./tipos/normal.png"
import planta from "./tipos/planta.png"
import psiquico from "./tipos/psiquico.png"
import roca from "./tipos/roca.png"
import tierra from "./tipos/tierra.png"
import veneno from "./tipos/veneno.png"

const PokeNavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className='homebtn'>Inicio</Link>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>Tipos</button>
            {dropdownOpen && (
              <div className="dropdown-content">
                <div className='grid-dropdown'>
                  <Link to="/bug" style={{ backgroundImage: `url(${bicho})` }}></Link>
                  <Link to="/dragon" style={{ backgroundImage: `url(${dragon})` }}></Link>
                  <Link to="/electric" style={{ backgroundImage: `url(${electrico})` }}></Link>
                  <Link to="/fairy" style={{ backgroundImage: `url(${hada})` }}></Link>
                  <Link to="/fighting" style={{ backgroundImage: `url(${lucha})` }}></Link>
                  <Link to="/fire" style={{ backgroundImage: `url(${fuego})` }}></Link>
                  <Link to="/ghost" style={{ backgroundImage: `url(${fantasma})` }}></Link>
                  <Link to="/grass" style={{ backgroundImage: `url(${planta})` }}></Link>
                  <Link to="/ground" style={{ backgroundImage: `url(${tierra})` }}></Link>
                  <Link to="/ice" style={{ backgroundImage: `url(${hielo})` }}></Link>
                  <Link to="/normal" style={{ backgroundImage: `url(${normal})` }}></Link>
                  <Link to="/poison" style={{ backgroundImage: `url(${veneno})` }}></Link>
                  <Link to="/psychic" style={{ backgroundImage: `url(${psiquico})` }}></Link>
                  <Link to="/water" style={{ backgroundImage: `url(${agua})` }}></Link>
                  <Link to="/rock" style={{ backgroundImage: `url(${roca})` }}></Link>
                </div>
              </div>
            )}
          </div>
        </li>
        <li>
        <div className="btn-direction">
          <div className='vertical'></div>
          <div className='horizontal'></div>
        </div>
        </li>
        <li className='btnAB'>
          <button className="button-a">A</button>
          <button className="button-b">B</button>
        </li>
      </ul>
    </nav>
  );
}

export default PokeNavBar;