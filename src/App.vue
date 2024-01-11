<template>
  <div class="container">
      <h1>¡809 Pokemon!</h1>
      <h3>From I to VIII generation!</h3>
      <FilterByPokemonType />
      <FilterByPokemonName />
      <ListOfPokemons />
  </div>
</template>

<script>
import ListOfPokemons from './components/ListOfPokemons.vue';
import FilterByPokemonType from './components/FilterByPokemonType.vue';
import FilterByPokemonName from './components/FilterByPokemonName.vue';
export default {
  name: 'App',
  components: {
    ListOfPokemons,
    FilterByPokemonType,
    FilterByPokemonName
    
  }
}
</script>

<style lang="scss">
  :root {
  --background-body: #24282F;
  --background-card: #3C3E44;
  --text-white: #FFFFFF;
  --text-gray: #c0c0c0;
  --text-orange: #FF9800;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: var(--background-body);
  color: var(--text-white);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-image: url('assets/pokemon-wallpaper.png');
  
  
}
h1 {
  padding: 10px;
  margin-bottom: 1rem;
  text-align: center;
}
.container {
  width: 70%;
  max-width: 90%;
  margin: 5rem auto;
}
img {
  width: 55%;
}

h3 {
  text-align: center;
}


</style>
