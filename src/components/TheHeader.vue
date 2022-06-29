<template>
    <div class="container">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Scrivi il film da cercare" 
            v-model="inputText"
            v-on:keyup.enter="onSearchText"
            > {{ searchText }}
            <!-- <button class="btn btn-outline-secondary" type="button" @click="onSearchText">Cerca</button> -->
        </div>
    </div>
</template>

<script>
import {searchData, state} from "../store";

export default {
    name: "TheHeader",

    data() {
        return {
            // collegare v-model
            inputText: "",
        }
    },

    methods: {
        // v-on:keyup.enter="onSearchText"
        // al press del tasto enter/click button vado a salvare nella var searchText dello state
        // il contenuto dell'inputText dato dall'user
        onSearchText() {
            state.searchText = this.inputText
        }
    },
    mounted() {
        searchData()
    }
}

</script>

<style lang="scss" scoped>

</style>