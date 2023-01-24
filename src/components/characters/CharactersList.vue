<script>
import CharactersCard from './CharactersCard.vue'
export default {
    name: 'CharactersList',
    components: { CharactersCard },
    props: {
        characters: Array
    }
}
</script>

<template>
    <section id="characters">
        <div class="row justify-content-center">
            <characters-card v-for="character in characters" :key="character.id" :image="character.imageUrl"
                :number="character.number" :name="character.name" :type="character.type1" :color="character.color">

            </characters-card>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#characters {
    background-color: grey;
    min-height: 80vh;
    margin: 30px 20px;
    display: flex;
    align-items: center;
}
</style>