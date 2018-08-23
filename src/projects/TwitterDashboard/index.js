import React from 'react';
import axios from 'axios';
import authToken from './auth';

axios.defaults.headers.common['Authorization'] = authToken;

class TwitterDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      pokemon: null,
      pokemonNumber: 1
    };
    this.queryPokemonApi = this.queryPokemonApi.bind(this);
  }

  queryPokemonApi() {
    this.setState({ loading: true });
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonNumber}/`).then((response) => {
      console.log(response.data);
      this.setState({ loading: false, pokemon: response.data })
    });
  }

  render() {
    const { loading, pokemon, pokemonNumber } = this.state;
    const pokemonDetails = pokemon && (
      <p>Name: {pokemon.name}</p>
    );
    return (
      <React.Fragment>
        <p>Pokemon Dashboard {loading && ' - Loading...'}</p>
        <input value={pokemonNumber} onChange={(e) => {
          this.setState({ pokemonNumber: e.target.value })
        }}/>
        <button onClick={this.queryPokemonApi}>
          Query Pokemon
        </button>

        {pokemonDetails}
      </React.Fragment>
    )
  }
}

export default TwitterDashboard;
