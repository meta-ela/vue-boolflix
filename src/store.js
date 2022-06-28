import axios from "axios";
import Vue from "vue";

export const state = Vue.observable({
    moviesList: [],
})

export function searchData(searchText) {
    axios.get("https://api.themoviedb.org/3/search/movie/", {
        params: {
            api_key: "09bfa2d28e4a21cca1492a0a9fdc0921",
            query: searchText,
            language: "it-IT",
        },
    })
    .then((resp) => {
        state.moviesList = resp.data.results;
    })
}