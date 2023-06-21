const PokemonList = ({name, pokemonData}: {name: string, pokemonData: any}) => {

console.log(pokemonData);

  return (
    <>
      <h1>{name}</h1>
      <img src={pokemonData.sprites.front_default}/>
    </>
  )
}
  
export default PokemonList