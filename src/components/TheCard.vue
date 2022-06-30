<template>
    <div class="container">
        <ul>
            <li v-for="(movies, i) in moviesList" :key="i">
                {{ movies.title }}
                <ul>
                    <li>Original Title: {{ movies.original_title }}</li>
                    <li>Original Language: {{ movies.original_language }} 
                        <span class="fi " :class="'fi-' + countryFlag"></span>
                    </li>
                    <li>Average Vote: {{ movies.vote_average }}</li>
                    <li>prova voto {{ voteRange }}</li>
                    <li>prova: {{ movies.poster_path }}</li>
                    <li>{{ cardImage }}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
/* import {state} from "../store"; */

export default {
    name: "TheCard",

    props: {
        moviesList: Array,
    },

    computed: {
        /* moviesList() {
            return state.moviesList;
        }, */
        countryFlag () {
            let langsMap = {
                "en" : "us",
                "ja" : "jp",
            }

            if(langsMap[this.moviesList.original_language]) {
                return langsMap[this.moviesList.original_language]
            }

            return this.moviesList.original_language
        },
        cardImage() {
            return "https://image.tmdb.org/t/p/" + "w342" + this.moviesList.poster_path
        },
        voteRange() {
            return Math.ceil(this.moviesList.vote_average / 2);
        }
    },
}

</script>

<style lang="scss" scoped>

</style>