<script>
import CharactersList from './characters/CharactersList.vue';
export default {
    name: 'App Main',
    components: { CharactersList },
    props: {
        characters: Array
    }
}
</script>

<template>
    <main class="container rounded-5">
        <characters-list :characters="characters"></characters-list>
    </main>
</template>

<style lang="scss" scoped>
main {
    min-height: 80vh;
    background-color: white;
    overflow-y: auto;
}
</style>