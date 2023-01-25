<script>
import CharactersList from './characters/CharactersList.vue';
import SelectForm from './SelectForm.vue';
export default {
    name: 'App Main',
    components: { CharactersList, SelectForm },
}
</script>

<template>
    <select-form></select-form>
    <main class="container rounded-5">
        <characters-list></characters-list>
    </main>
</template>

<style lang="scss" scoped>
main {
    height: 80vh;
    background-color: white;
    overflow-y: auto;
    border: 2px solid black;
}
</style>