<template>
    <h2>Filter by type!</h2>
  <div class="filter">
    
    <div class="item" @click="$event => filter('')">
        All
    </div>

    <div class="item" @click="$event => filter('Normal')">
         Normal
    </div>
    <div class="item" @click="$event => filter('Fire')" >
        Fire
    </div>

    <div class="item" @click="$event => filter('Water')" >
        Water
    </div>

    <div class="item" @click="$event => filter('Electric')" >
        Electric
    </div>

    <div class="item" @click="$event => filter('Grass')" >
        Grass
    </div>

  <div class="item" @click="$event => filter('Ice')" >
    Ice
  </div>

  <div class="item" @click="$event => filter('Fighting')" >
    Fighting
  </div>

  <div class="item" @click="$event => filter('Poison')" >
    Poison
  </div>

  <div class="item" @click="$event => filter('Ground')" >
    Ground
  </div>

  <div class="item" @click="$event => filter('Flying')" >
    Flying
  </div>

  <div class="item" @click="$event => filter('Psychic')" >
    Psychic
  </div>

  <div class="item" @click="$event => filter('Bug')" >
    Bug
  </div>

  <div class="item" @click="$event => filter('Rock')" >
    Rock
  </div>

  <div class="item" @click="$event => filter('Ghost')" >
    Ghost
  </div>

  <div class="item" @click="$event => filter('Dragon')" >
    Dragon
  </div>

  <div class="item" @click="$event => filter('Dark')" >
    Dark
  </div>

  <div class="item" @click="$event => filter('Steel')" >
    Steel
  </div>

  <div class="item" @click="$event => filter('Fairy')" >
    Fairy
  </div>

  <div class="item" @click="$event => filter('Stellar')" >
    Stellar
  </div>
</div>
</template>

<script>
import { useStore } from 'vuex';

export default {
    setup(){
        const storeType = useStore()

        const filter = ((type) =>{
            storeType.dispatch('filterByType', type)
        })
        return {
            filter
        }
    }
}
</script>

<style lang="scss">
.filter {
  width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-radius: 20px;
  overflow: hidden;
  
  
  .item {
    padding: 1rem 0.5rem;
    background-color: var(--background-card);
    text-align: center;
    cursor: pointer;
    &:hover {
      color: var(--text-orange);
    }
  }
}

h2 {
  padding: 10px;
  margin-bottom: 1rem;
  text-align: center;
}

</style>