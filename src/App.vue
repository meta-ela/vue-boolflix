<template>
  <div id="app">
    <!-- mettere l'evento in ascolto sul padre -->
    <TheHeader @searchTextChanged="onSearchTextChanged"></TheHeader>
    <!-- comunicare tramite prop a cui fare passare la moviesList -->
    <TheMain 
    :moviesList="moviesList"
    :seriesList="seriesList"
    ></TheMain>
  </div>
</template>

<script>
import axios from "axios";
/* import { type } from "os"; */
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
      seriesList: [],
    }
  },

  methods: {
    // inputText => dati che riceve dall'utente, collegamento v-model
    onSearchTextChanged(inputText) {
      // salva i dati in variabile esterna
      this.searchText = inputText;

      // chiamata axios
      /* axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "09bfa2d28e4a21cca1492a0a9fdc0921",
            query: inputText,
            language: "it-IT",
          },
        })
        .then((resp) => {
          this.moviesList = resp.data.results;
        })
       */
    },

    // chiamata axios
    /**
     * 
     * @param {"movie"|"tv"} type 
     */
    fetchData(type) {
      axios
      .get("https://api.themoviedb.org/3/search/" + type, {
        params: {
          api_key: "09bfa2d28e4a21cca1492a0a9fdc0921",
          query: this.searchText,
          language: "it-IT",
        },
      })
      .then((resp) => {
        if(type === "movie") {
          this.moviesList = resp.data.results;
        } else {
          this.seriesList = resp.data.results;
        }
      })
    },
  },

    watch: {
      searchText() {
        this.fetchData("movie");
        this.fetchData("tv");
      }
    }
};
</script>

<style lang="scss">

@import "assets/scss/main.scss";

</style>
