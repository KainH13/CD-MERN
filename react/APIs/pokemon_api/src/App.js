import { useEffect, useState } from 'react';
import axios from 'axios';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        console.log(response);
        console.log(response.data);
        setPokemon(response.data.results);
      })
      .catch(err=>{
        console.log(err);
      })
  }, []);

  return (
    <div className="App col-sm-6 offset-sm-3 d-flex flex-column align-items-center">
      <h1>All Pokemon from PokeAPI!</h1>
      <ul>
        {
          pokemon.length > 0 && pokemon.map((entry, index) => {
            return (
              <li key={index}>{entry.name}</li>
            )
          })
        }  
      </ul>
    </div>
  );
}

export default App;
