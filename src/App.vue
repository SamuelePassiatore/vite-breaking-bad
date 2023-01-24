<script>
import axios from 'axios';
import { store } from './data/store';
import AppMain from './components/AppMain.vue';
export default {
  components: { AppMain },
  data() {
    return {
      store
    }
  },
  methods: {
    fetchCharacters(url) {
      axios.get(url)
        .then(res => {
          this.store.characters = res.data.docs;
        })
    }
  },
  created() {
    this.fetchCharacters(store.apiUri);
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