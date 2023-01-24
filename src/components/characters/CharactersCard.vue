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
    <div class="character-card m-2 text-center">
        <div class="container-img d-flex justify-content-center align-items-center"><img :src="image" :alt="name"></div>
        <div>{{ number }}</div>
        <h4>{{ name }}</h4>
        <div>{{ type }}</div>
    </div>
</template>

<style lang="scss" scoped>
.character-card {
    background-color: white;
    min-height: 250px;
    width: 17%;
    padding: 10px;
}

.container-img {
    height: 100px;
    width: 100px;
    border: 1px solid green;
    border-radius: 50%;
    margin: 2px auto;

    img {
        width: 65px;
    }
}
</style>