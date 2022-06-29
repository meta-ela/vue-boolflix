<template>
  <div id="app">
    <!-- mettere l'evento in ascolto sul padre -->
    <TheHeader @searchTextChanged="onSearchTextChanged"></TheHeader>
    <TheMain></TheMain>
  </div>
</template>

<script>
import axios from "axios";
import TheHeader from './components/TheHeader.vue'
import TheMain from './components/TheMain.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheMain
  },

  data () {
    return {
      searchText: "",
      moviesList: [],
    }
  },

  methods: {
    // inputText => dati che riceve dall'utente, collegamento v-model
    onSearchTextChanged(inputText) {
      // dalva i dati in variabile esterna
      this.searchText = inputText;

      // chiamata axios
      axios
        .get("https://api.themoviedb.org/3/search/movie/", {
          params: {
            api_key: "09bfa2d28e4a21cca1492a0a9fdc0921",
            query: inputText,
            language: "it-IT",
          },
        })
        .then((resp) => {
          this.moviesList = resp.data.results;
        })
    },

  },
}
</script>

<style lang="scss">

@import "assets/scss/main.scss";

</style>
