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
    fetchCharacters(endpoint = this.apiUri) {
      store.isLoading = true,
        axios.get(endpoint)
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
          store.types = res.data;
        }).catch(error => {
          console.log(error)
        }).then(() => {
          store.isLoading = false;
        });
    },

    filterPokemon(type) {
      const url = type ? `${this.apiUri}?eq[type1]=${type}` : this.apiUri;
      this.fetchCharacters(url);
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