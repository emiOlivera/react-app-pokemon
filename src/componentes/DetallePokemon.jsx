import React, { useContext, useEffect} from 'react';
import Contexto from "../Contexto/Contexto";
import {data} from "../Data"
import html2canvas from 'html2canvas';

const DetallePokemon = () => {
  const { pokemones, pokemonEncontrado } = useContext(Contexto);
  const pokemonData = data.find(pokemon => pokemon.id === parseInt(pokemonEncontrado)); 
  const pokemon = pokemones.find(p => p.id === parseInt(pokemonEncontrado));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const download = () => {
    const divImg = document.querySelector('.detail-img');
    html2canvas(divImg, { useCORS: true }).then(canvas => {
        canvas.toBlob(blob => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'imagen_pokemon.jpg';
            link.click();
        });
    });
  };

  if (!pokemon && !pokemonData) {
    return <div>Cargando...</div>; 
  }

  return (
    <div className="details">
      <button className={`download ${pokemonData.tipo1}-information`} onClick={download}>DESCARGAR IMAGEN</button>
      <div className={`detail ${pokemonData.tipo1}-back`}>
        <div className={`head ${pokemonData.tipo1}-information`}>
        <h1 className='detail-name'>{pokemon.name.toUpperCase()}</h1>
        <div className='detail-icons'>
          <div className="icono1">
            <img src={require(`../atributos/${pokemon.type1}-atribute.png`)} alt={pokemon.type1}/>
            <p>{pokemonData.tipo1}</p>
			    </div>
          {pokemon.type2 &&
          <div className="icono2">
            <img src={require(`../atributos/${pokemon.type2}-atribute.png`)} alt={pokemon.type2}/> 
            <p>{pokemonData.tipo2}</p>
			    </div>
          }
      </div>
      <div className='detail-img'>
        <div className="background-detail" style={{backgroundImage: `url(${require(`../main-imagen/${pokemon.type1}-main.jpg`)}`}}>
          <img src={pokemon.img} alt={pokemon.name}/>
        </div>
      </div>
      </div>
      <div className={`information ${pokemonData.tipo1}-information`}>
        <div className={`regular-information ${pokemonData.tipo1}-data`}>
          <p>{pokemonData.informacion}</p>
        </div>
        <div className={`abilities ${pokemonData.tipo1}-data`}> 
          <p>· Habilidad pasiva nº 1 :<br/> <span>{pokemon.ability1}.</span></p>
          <p>· Habilidad pasiva nº 2 :<br/> <span>{pokemon.ability2}.</span></p>
        </div>
        <div className={`evolution ${pokemonData.tipo1}-data`}>
          <p>{pokemonData.evolucion}</p>
        </div>
        <h2>STATS:</h2>
        <div className={`stats ${pokemonData.tipo1}-data`}>
          <p>HP: {pokemon.hp}</p>
          <p>ATK: {pokemon.atk}</p>
          <p>DEF: {pokemon.df}</p>
          <p>SPECIAL ATK: {pokemon.spAtk}</p>
          <p>SPECIAL DEF: {pokemon.spDf}</p>
          <p>SPEED: {pokemon.speed}</p>
        </div>
      </div>
            <h3 className='sprite-title'>Sprites del pokemon:</h3>
        <div className={`sprites ${pokemonData.tipo1}-information`}>
          <div className={`sprite`}>
          <p>Frente normal: </p> <img src={pokemon.sprite}/>
          <p>Normal de espalda: </p> <img src={pokemon.spriteBack}/>
          </div>
          <div className='sprite'>
          <p>Frente shiny: </p> <img src={pokemon.shiny}/>
          <p>Shiny de espalda: </p> <img src={pokemon.shinyBack}/>
          </div>
          </div>
          <div className={`pokedex-info ${pokemonData.tipo1}-information`}>
            <h3>Detalles de la pokedex nº {pokemon.id}:</h3>
            <p className={`pokedex ${pokemonData.tipo1}-data`}>{pokemonData.pokedex}</p>
          </div>
      </div>
    </div>
  );
};

export default DetallePokemon;