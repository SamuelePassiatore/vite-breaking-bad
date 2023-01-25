import {reactive} from 'vue'
export const store = reactive ({
    characters:[],
    apiUri: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=250&page=1',
    isLoading: false
});