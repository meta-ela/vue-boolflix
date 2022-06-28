<template>
    <div class="container">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Scrivi il film da cercare" :v-model="searchText">
            <button class="btn btn-outline-secondary" type="button" @click="onSearchClicked">Cerca</button>
        </div>
    </div>
</template>

<script>
import {searchData} from "../store";

export default {
    name: "TheHeader",

    data() {
        return {
            searchText: "",
        }
    },

    methods: {
        onSearchClicked() {
            searchData("harry")
        }
    },
    mounted() {
        searchData("harry")
    }
}

</script>

<style lang="scss" scoped>

</style>