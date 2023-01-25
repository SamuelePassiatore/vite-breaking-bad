<script>
import axios from 'axios'
export default {
    name: 'SelectForm',
    data() {
        return {
            types: [],
            selectedType: ''
        }
    },
    created() {
        axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1')
            .then(res => {
                this.types = res.data
            })
    },
    methods: {
        filterByType() {
            // Filtrare i pokemon in base al tipo selezionato
        }
    }
}
</script>

<template>
    <select class="container form-select mb-3" v-model="selectedType" @change="filterByType()">
        <option value="" selected>Tutti i tipi</option>
        <option v-for="type in types" :value="type"> {{ type }} </option>
    </select>

</template>

<style lang="scss" scoped>

</style>