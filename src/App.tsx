import './App.css'
import PokemonList from './components/PokemonList'

const fetchData = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  return response.json();
}

const data = await fetchData();

const fetchSingularPokemon = async (infoUrl) => {
  const response = await fetch(infoUrl);
  return response.json();
}

function App() {
  
  const pokemon = data.results.map(pokemon => 
    <PokemonList name={pokemon.name}
                 pokemonData={fetchSingularPokemon(pokemon.url)}/>
    )
  return (
    pokemon
  )
}

export default App
