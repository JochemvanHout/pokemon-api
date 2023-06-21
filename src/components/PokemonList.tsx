const PokemonList = ({name, pokemonData}: {name: string, pokemonData: any}) => {

console.log(pokemonData);

  return (
    <>
      <h1>{name}</h1>
      <img src={pokemonData.sprites.front_default}/>
    </>
  )
}
  
// export default PokemonList


// const fetchData = async (url, callback) => {
//   const response = await fetch(url);
//   const data = await response.json();

//   callback(data);
// };

// const PokemonList = ({ infoUrl }) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchData(infoUrl, setData);
//   }, []);

//   return (
//     <React.Fragment>
//       <h1>{name}</h1>

//       {data !== null && <img src={data?.sprites?.front_default} alt="front_default" />}
//     </React.Fragment>
//   ) 
// };

// export default PokemonList;