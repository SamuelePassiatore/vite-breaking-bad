<script>
import axios from 'axios'
import CharactersCard from './CharactersCard.vue'
export default {
    name: 'CharactersList',
    components: { CharactersCard },
    data() {
        return {
            characters: []
        }
    },
    created() {
        axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10&page=5')
            .then(res => {
                this.characters = res.data.docs;
            })
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
}
</style>