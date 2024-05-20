import { useContext, useState } from 'react';
import Contexto from "../Contexto/Contexto";
import { FaCaretSquareLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const { pokemones, setIsRotate, isRotate,setPokemonEncontrado, pokemonEncontrado } = useContext(Contexto);
    const [searchValue, setSearchValue] = useState('');
    const [pokemonFiltrados, setPokemonFiltrados] = useState([]);
    const [searchBoolean, setSearchBoolean] = useState(false);

const navegacion = useNavigate();

const ampliar = (e) => {
  const id = e.target.id;
  setPokemonEncontrado(id);
  navegacion(`/detalle`)
}

    const inputChange = (event) => {
        setSearchValue(event.target.value);
    }

    const sendValue = () => {
        if (searchValue.trim() === '') {
            return;
        }
        const filtered = pokemones.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setPokemonFiltrados(filtered);
        setSearchBoolean(true);
    };

    const flipear = (e) => {
        isRotate ? e.target.parentNode.parentNode.parentNode.style.transform = "RotateY(180deg)" : setIsRotate(true)
        setIsRotate(!isRotate)
    }
    
    const volver = (e) => {
        !isRotate ? e.target.parentNode.parentNode.parentNode.parentNode.parentNode.style.transform = "RotateY(0)" : setIsRotate(false)
        setIsRotate(!isRotate)
    }

    return (
        <div className='app-buscador'>
            <div className='buscador'>
                <p> BUSQUEDA DE POKEMON: </p>
                <input type="text" className='busqueda' onChange={inputChange} />
                <input type="submit" value="BUSCAR" className='input-send' onClick={sendValue} />
            </div>
            {searchBoolean && pokemonFiltrados.length === 0 && <div className='error'><p>No se encontraron coincidencias</p></div>}
            {pokemonFiltrados.length > 0 && (
                <div className='card-container' style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px,0.4fr))', gap: '1rem', height: '480px' }}>
                    {pokemonFiltrados.map(pokemon => (
                        <div className='flip-card' key={pokemon.id} style={{ height: "480px", width: "320px" }}>
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
                        <img src={pokemon.img} alt={pokemon.name}/>
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
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;

