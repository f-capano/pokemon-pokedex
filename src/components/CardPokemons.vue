
<template>
    <div class="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
        <div class="pokemon__info">
            <h3> {{capitalizarPrimeraLetra(pokemon.name)}} </h3>
            <div class="pokemonTypes"> 
                
                <div>
                    <span v-for=" pokemonType in pokemon.types" :key="pokemonType">
                            
                        <p> Type: {{ capitalizarPrimeraLetra(pokemonType) }}</p> 
                    </span>
                </div>
            </div>
            <span> Pokédex number: {{ pokemon.id }}</span>
        </div>


    </div>
</template>

<script>

export default {
    props: ['pokemon'],

    methods: {
        capitalizarPrimeraLetra(palabra) {
        if (typeof palabra !== 'string' || palabra.length === 0) {
            return palabra;
        }

            return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        }

    }
}




</script>

<style lang="scss">

.pokemon {
  background-color: var(--background-card);
  border-radius: 20px;
  box-shadow: 0 0 10px 1px var(--background-body);
  overflow: hidden;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  height: 100%;
  width: 100%;
  text-align: center;
  margin: 0;
  &:hover {
    transform: scale(1.05);
    h3 {
      color: var(--text-orange);
    }
}

   .pokemon__info{
      box-sizing:40px solid ;
      border-radius: 10px;
      background-color: rgb(117, 46, 145);
      padding: 10px;
   } 
}

</style>