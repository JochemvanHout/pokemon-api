import './App.scss'
import PokemonCard from './components/PokemonCard'

const fetchData = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  return response.json();
}

const data = await fetchData();

function App() {
  
  const pokemon = data.results.map((pokemon: any) => 
    <PokemonCard name={pokemon.name}
                 pokemonUrl={pokemon.url}/>
    )
  return (
    pokemon
  )
}

export default App
