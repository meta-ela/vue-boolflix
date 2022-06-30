<template>
    <header class="sticky-top">
        <div class="container-fluid">
            <div class="d-flex justify-content-between align-items-end">
                <div class="logo_width">
                    <img class="w-100" src="/img/logo.png" alt="logo">
                </div>
                <div class="input-group mb-3 logo_width">
                    <input type="text" class="form-control" placeholder="Scrivi il film da cercare" 
                    v-model="inputText"
                    v-on:keyup.enter="onSearchText">
                    <!-- <button class="btn btn-outline-secondary" type="button" @click="onSearchText">Cerca</button> -->
                </div>
            </div>
        </div>
    </header>
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
        },
    },

    
}

</script>

<style lang="scss" scoped>

</style>