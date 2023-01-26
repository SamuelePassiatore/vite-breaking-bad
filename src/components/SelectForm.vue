<script>
import axios from 'axios'
export default {
    name: 'SelectForm',
    data() {
        return {
            selectedType: '',
        }
    },
    emits: ['option-change'],
    props: {
        defaultValue: String,
        options: Array
    }

}
</script>

<template>
    <select class="container form-select mb-3" v-model="selectedType" @change="$emit('option-change', selectedType)">
        <option value="" selected>{{ defaultValue || '---' }}</option>
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>

</template>

<style lang="scss" scoped>
select {
    cursor: url(https://cur.cursors-4u.net/games/gam-13/gam1282.cur), auto !important;
}
</style>