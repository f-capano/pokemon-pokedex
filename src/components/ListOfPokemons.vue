<template>
    <section>
        <div class="pokemons">

            <div class="pokemons__item" v-for="pokemon in pokemons" :key="pokemon.name">
                <CardPokemons :pokemon="pokemon"/>
            </div>
        </div>
    </section>
</template>







<script>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import CardPokemons from './CardPokemons.vue';


export default {
    setup() {
        const store = useStore();
        const pokemons = computed(() => {
            return store.state.pokemonsFilter;
        });
        onMounted(() => {
            store.dispatch('getPokemons');
        });
        return {
            pokemons
        };
    },
    components: { CardPokemons },
}
</script>

<style lang="scss">
.pokemons__item {
  padding: 6px;
  margin: 0;
  
}

.pokemons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 0;
  justify-content: center;
  align-items: center;
  
}

section {
    padding: 10px;
}



</style>