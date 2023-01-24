<script>
import axios from 'axios';
import AppMain from './components/AppMain.vue';
export default {
  components: { AppMain },
  data() {
    return {
      characters: []
    }
  },
  methods: {
    fetchCharacters() {
      axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10&page=5')
        .then(res => {
          this.characters = res.data.docs;
        })
    }
  },
  created() {
    this.fetchCharacters();
  }
}
</script>

<template>
  <header>
    <h1 class="text-center">Pokemon</h1>
  </header>
  <app-main :characters="characters"></app-main>
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>