<template>
    <div class="container">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Scrivi il film da cercare" 
            v-model="inputText"
            v-on:keyup.enter="onSearchText">
            <!-- <button class="btn btn-outline-secondary" type="button" @click="onSearchText">Cerca</button> -->
        </div>
    </div>
</template>

<script>

export default {
    name: "TheHeader",

    data() {
        return {
            // collegare v-model
            inputText: "",
        }
    },

    methods: {
        onSearchText() {
            // emit deve arrivare al padre App.vue
            this.$emit("searchTextChanged", this.inputText)
        }
    },
}

</script>

<style lang="scss" scoped>

</style>