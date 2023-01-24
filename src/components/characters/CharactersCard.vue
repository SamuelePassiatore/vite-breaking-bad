<script>
import axios from 'axios'
export default {
    name: 'CharactersCard',
    props: {
        image: String,
        number: Number,
        name: String,
        type: String,
        color: String
    }
}
</script>

<template>
    <div class="character-card rounded-3 m-2 text-center">
        <div class="container-img d-flex justify-content-center align-items-center"><img :src="image" :alt="name">
        </div>
        <div class="pt-1">{{ number }}</div>
        <h4 class="text-uppercase pt-2">{{ name }}</h4>
        <div>{{ type }}</div>
    </div>
</template>

<style lang="scss" scoped>
.character-card {
    background-color: white;
    min-height: 250px;
    width: 18%;
    padding: 15px 5px;
    border: 1px solid black;
}

.container-img {
    height: 110px;
    width: 110px;
    border: 1px solid grey;
    border-radius: 50%;
    margin: 2px auto;
    box-shadow: 0 0 6px 3px rgba(black, 0.5);

    img {
        width: 65px;
    }
}
</style>