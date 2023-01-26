<script>
import axios from 'axios';
import { store } from './data/store';
import AppMain from './components/AppMain.vue';
export default {
  name: 'Pokedex',
  components: { AppMain },
  data() {
    return {
      apiUri: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons',
      store,
    }
  },
  methods: {
    fetchCharacters(url) {
      store.isLoading = true,
        axios.get(this.apiUri)
          .then(res => {
            this.store.characters = res.data.docs;
          }).catch(error => {
            console.log(error)
            store.characters = [];
          }).then(() => {
            store.isLoading = false;
          });
    },
    fetchTypes() {
      store.isLoading = true;
      axios.get(this.apiUri + '/types1')
        .then(res => {
          store.types = res.data.sort();
        }).catch(error => {
          console.log(error)
        }).then(() => {
          store.isLoading = false;
        });
    },

    filterPokemon(type) {
      console.log(type);
    }
  },
  created() {
    this.fetchCharacters(store.apiUri);
    this.fetchTypes();
  }
}
</script>

<template>
  <header>
    <img class="img-title" src="./assets/img/pokemon.png" alt="title">
  </header>
  <app-main @filter-change="filterPokemon"></app-main>
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>