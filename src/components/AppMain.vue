<script>
import CharactersList from './characters/CharactersList.vue';
import SelectForm from './SelectForm.vue';
import { store } from '../data/store'
export default {
    name: 'App Main',
    components: { CharactersList, SelectForm },
    emits: ['filter-change'],
    // methods: {
    //     onFilterChange(selectedType) {
    //         this.$emit('filter-change', selectedType);
    //     }
    // }
    data() {
        return store
    }
}
</script>

<template>
    <select-form :options="types" :default-value="'All'" @option-change="$emit('filter-change', $event)"></select-form>
    <main class="container rounded-5">
        <characters-list></characters-list>
    </main>
</template>

<style lang="scss" scoped>
main {
    height: 75vh;
    background-color: white;
    overflow-y: auto;
    border: 2px solid black;
}
</style>