<script>
import { store } from '../../data/store';
import CharactersCard from './CharactersCard.vue';
export default {
    name: 'CharactersList',
    components: { CharactersCard },
    data() {
        return store
    },

}
</script>

<template>
    <section id="characters">
        <div v-if="isLoading" class="fs-1">Loading..</div>
        <div v-else class="row justify-content-center">
            <characters-card v-for="character in characters" :key="character.id" :image="character.imageUrl"
                :number="character.number" :name="character.name" :type="character.type1" :color="character.color">
            </characters-card>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#characters {
    background-color: grey;
    min-height: 75vh;
    margin: 30px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>