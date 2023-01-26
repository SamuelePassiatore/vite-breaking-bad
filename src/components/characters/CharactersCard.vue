<script>
import axios from 'axios'
export default {
    name: 'CharactersCard',
    props: {
        image: String,
        number: Number,
        name: String,
        type: String,

    }
}
</script>

<template>
    <div class="character-card rounded-3 m-2 text-center" v-bind:class="type.toLowerCase()">
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
    cursor: url(https://cur.cursors-4u.net/games/gam-13/gam1282.cur), auto !important;

    .container-img {
        height: 110px;
        width: 110px;
        border: 1px solid grey;
        background-color: white;
        border-radius: 50%;
        margin: 2px auto;
        box-shadow: 0 0 6px 3px rgba(black, 0.5);

        img {
            width: 44px;
        }
    }
}

.character-card:hover {
    box-shadow: 0 0 6px 5px rgba(white, 0.8);
}


// ! TODO Change classes
.poison {
    background-color: #BB8FCE;
}

.fairy {
    background-color: pink;
}

.fire {
    background-color: #E24242;
}

.ice {
    background-color: lightblue;
}

.grass {
    background-color: greenyellow;
}

.water {
    background-color: dodgerblue;
}

.electric {
    background-color: yellow;
}

.bug {
    background-color: darkgreen;
    color: white;
}

.normal {
    background-color: lightyellow;
}

.dark {
    background-color: #2C2E2B;
    color: white;
}

.ground {
    background-color: brown;
    color: white;
}

.dragon {
    background-color: orange;
}

.steel {
    background-color: lightgrey;
}

.psychic {
    background-color: fuchsia;
}

.rock {
    background-color: darkslategrey;
    color: white;
}

.water {
    background-color: aqua;
}

.ghost {
    background-color: purple;
    color: white;
}

.fighting {
    background-color: orangered;
}

.flying {
    background-color: #7DB808;
}
</style>