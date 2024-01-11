import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemons: [],
    pokemonsFilter: [],
  },

  getters: {
  },

  mutations: {
    setPokemons(state, payload){
      state.pokemons = payload
    },

    setPokemonsFilter(state,payload){
        state.pokemonsFilter = payload
    }
  },

  actions: {
    async getPokemons({ commit }) {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=898');
        const data = await response.json();
  
        const pokemonDetailsPromises = data.results.map(async (pokemon) => {
          const detailsResponse = await fetch(pokemon.url);
          const detailsData = await detailsResponse.json();
  
          const types = detailsData.types.map(typeInfo => typeInfo.type.name);
  
          return {
            id: detailsData.id,
            name: detailsData.name,
            sprites: {
              front_default: detailsData.sprites.front_default,
            },
            types: types,
          };
        });
  
        const pokemonDetails = await Promise.all(pokemonDetailsPromises);
  
        commit('setPokemons', pokemonDetails);
        commit('setPokemonsFilter', pokemonDetails);
        
        commit('filterByType', type);
      } catch (error) {
        console.error('Error al obtener datos de Pokémon:', error);
      }
    },
  
    filterByType({ commit, state }, type) {
      if (!type) {
        // Si el tipo es nulo o vacío, mostrar todos los Pokémon
        commit('setPokemonsFilter', state.pokemons);
      } else {
        // Filtrar por el tipo proporcionado
        const tipoMinusculas = type.toLowerCase();
        const filter = state.pokemons.filter((pokemon) => {
          return pokemon.types.map((t) => t.toLowerCase()).includes(tipoMinusculas);
        });
        commit('setPokemonsFilter', filter);
      }
    },

    filterByName({commit, state}, name){
      const formatName = name.toLowerCase();
      const filter =  state.pokemons.filter((pokemon) => {
        const pokemonName = pokemon.name.toLowerCase()

        if(pokemonName.includes(formatName)){
          return pokemon
        }
      })
      commit('setPokemonsFilter', filter);
    }
  },

  modules: {
  }
})
