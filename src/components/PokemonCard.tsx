import './PokemonCard.scss'
import { useEffect, useState } from 'react'
import { PokeAPI } from 'pokeapi-types';

const fetchData = async (url: string): Promise<PokeAPI.Pokemon> => {
  const response = await fetch(url);
  return await response.json();
};

const PokemonList = ({name, pokemonUrl}: {name: string, pokemonUrl: string}) => {

  const [data, setData] = useState<null | PokeAPI.Pokemon>(null);

  useEffect(() => {
    setData(fetchData(pokemonUrl) );
  }, []);

  return (
    <>
      <div className="pokemon-card">
        <h1>{name}</h1>
        {data !== null && <img src={data.sprites.front_default}/>}
      </div>
    </>
  )
}
  
export default PokemonList