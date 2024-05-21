import { FaCaretSquareLeft} from "react-icons/fa"
import { useContext, useEffect, useState } from 'react';
import Contexto from "../Contexto/Contexto";
import { useNavigate } from "react-router-dom";

const Bug = () => {
const navegacion = useNavigate();

const { pokemones, setIsRotate, isRotate, setPokemonEncontrado, pokemonEncontrado } = useContext(Contexto);

const ampliar = (e) => {
  const id = e.target.id;
  setPokemonEncontrado(id);
  navegacion(`/detalle`)
}

const flipear = (e) =>{
  isRotate ? e.target.parentNode.parentNode.parentNode.style.transform ="RotateY(180deg)" : setIsRotate(true)
  setIsRotate(!isRotate)
}
const volver = (e) =>{
  !isRotate ? e.target.parentNode.parentNode.parentNode.parentNode.parentNode.style.transform = "RotateY(0)" : setIsRotate(false) 
  setIsRotate(!isRotate)
}
return (
    <div className='App'>
      {pokemones.filter(pokemon => pokemon.type1 === "bug").map( (pokemon, indice) => {
        return (
          <div className='card-container' key={pokemon.id}>
            <div className='flip-card'>
              <div className={"flip-card-inner " + pokemon.type1} style={{transformStyle:"preserve-3d"}}>
                  {/* HEADER CARD */}
                  <div className={"flip-card-front " + pokemon.type1}>
				            <div className={`header +  ${pokemon.type1}-parts`}>
					            <div className="name">
						            <h2>{pokemon.name.charAt(0).toUpperCase()}{pokemon.name.substring(1)}</h2>
					            </div>
					            <div className="atribute-icon">
                        <img src={require(`../atributos/${pokemon.type1}-atribute.png`)} alt={pokemon.type1}/>
					            </div>
                      {pokemon.type2 !== "" ?
                      <div className="atribute-icon">
                        <img src={require(`../atributos/${pokemon.type2}-atribute.png`)} alt={pokemon.type2}/>
					            </div> : "" }
				            </div>
                  {/* MAIN CARD */}
                    <div className='main'>
                      <div className='imagen' style={{backgroundImage: `url(${require(`../main-imagen/${pokemon.type1}-main.jpg`)}`}}>
                        <img src={pokemon.img} alt={pokemon.name} style={{width: "90%"}}/>
                      </div>
                    </div>
                  {/* SIDER CARD */ }
                  <div className='sider'>
                      <button onClick={flipear} className={`btn ${pokemon.type1}-parts`}>stats</button>
                      <button onClick={ampliar} id={pokemon.id} className={`btn  ${pokemon.type1}-parts`}>info</button> 
                  </div>
                  {  /* FOOTER CARD */ }
                    <div className={`footer +  ${pokemon.type1}-parts`}>
					            <div className="pokedex-number">
						            <div className="name">Pokedex:</div>
						            <div className="number"> N° {pokemon.id}</div>
					            </div>
				            </div>
                  </div>
                   {  /* BACK */   }
                    <div className={"flip-card-back " + pokemon.type1}>
					            <h2 className={`${pokemon.type1}-parts`}>{pokemon.name.charAt(0).toUpperCase()}{pokemon.name.substring(1)}</h2>
					            <div className='imagen-back'>
                          <div className='icon'>
                            <FaCaretSquareLeft style={{width: "100%", height: "100%"}} onClick={volver} className={`${pokemon.type1}-icon`}/>
                          </div>
                        <img src={require(`../back-imagen/${pokemon.type1}-back.jpg`)} alt={pokemon.name}/>
                      </div>
                      <div className={`p-div ${pokemon.type1}-parts`}>
                        <div className={`barra ${pokemon.type1}-barra`}>
                        <span>HP:</span>
                        <span className={`porcentaje ${pokemon.type1}-porcentaje`}>{pokemon.hp}</span>
                        </div>
                        <div className={`barra ${pokemon.type1}-barra`}>
                        <span>ATTACK:</span>
                        <span className={`porcentaje ${pokemon.type1}-porcentaje`}>{pokemon.atk}</span>
                        </div>
                        <div className={`barra ${pokemon.type1}-barra`}>
                        <span>DEFENSE:</span>
                        <span className={`porcentaje ${pokemon.type1}-porcentaje`}>{pokemon.df}</span>
                        </div>
                        <div className={`barra ${pokemon.type1}-barra`}>
                        <span>SPECIAL ATK:</span>
                        <span className={`porcentaje ${pokemon.type1}-porcentaje`}>{pokemon.spAtk}</span>
                        </div>
                        <div className={`barra ${pokemon.type1}-barra`}>
                        <span>SPECIAL DEF:</span>
                        <span className={`porcentaje ${pokemon.type1}-porcentaje`}>{pokemon.spDf}</span>
                        </div>
                        <div className={`barra ${pokemon.type1}-barra`}>
                        <span>SPEED:</span>
                        <span className={`porcentaje ${pokemon.type1}-porcentaje`}>{pokemon.speed}</span>
                        </div>
                      </div>
			            </div>
                </div>
              </div>
            </div>
        )
      })}
    </div>
  )
}

export default Bug
