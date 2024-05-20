import Contexto from "./Contexto"
import { useState, useEffect } from "react"

const Provider = ({children}) => {
  const [isRotate, setIsRotate] = useState(true);
  const [pokemones, setPokemones] = useState([]); 
  const [pokemonEncontrado, setPokemonEncontrado] = useState(0);
    useEffect (()=>{
      const getPokemon = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        const listpkm = await response.json();
        const {results} = listpkm;
        const pkm = results.map(async (p) => {
          const response = await fetch(p.url);
          const poke = await response.json()
          
          return {
            id: poke.id,
            name: poke.name,
            img: poke.sprites.other["official-artwork"].front_default,
            type1: poke.types[0].type.name,
            type2: poke.types[1] ? poke.types[1].type.name : "",
            hp: poke.stats[0].base_stat,
            atk: poke.stats[1].base_stat,
            df: poke.stats[2].base_stat,
            spAtk: poke.stats[3].base_stat,
            spDf: poke.stats[4].base_stat,
            speed: poke.stats[5].base_stat,
            ability1: poke.abilities[0].ability.name,
            ability2: poke.abilities[1] ? poke.abilities[1].ability.name : null,
            spriteBack: poke.sprites.back_default,
            sprite: poke.sprites.front_default,
            shinyBack: poke.sprites.back_shiny,
            shiny: poke.sprites.front_shiny
          }
        })
        setPokemones(await Promise.all(pkm));
      }
    
      getPokemon()
    },[])
  return (
    <Contexto.Provider value={{
      isRotate,
      setIsRotate,
      pokemones,
      pokemonEncontrado,
      setPokemonEncontrado
       }}>
        { children }
    </Contexto.Provider>
  )
}

export default Provider