<template>
    <div class="container">
        <ul>
            <li v-for="(movie, i) in moviesList" :key="i">
                {{ movie.title }}
                
                    <div>Original Title: {{ movie.original_title }}</div>
                    <div>Original Language: {{ countryFlag(movie.original_language) }} 
                        <span class="fi " :class="'fi-' + countryFlag(movie.original_language)"></span>
                    </div>
                    <div>Average Vote: {{ voteRange(movie.vote_average) }}/5</div>
                    <div>
                        <span v-for="i in 5" :key="i">
                            <i v-if="i <= voteRange(movie.vote_average)" class="fa-solid fa-star"></i>
                            <i v-else class="fa-regular fa-star"></i>
                        </span>
                    </div>
                    <img :src="cardImage(movie.poster_path)" :alt="movie.original_title">
                
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
    },methods:{        
        countryFlag (lang) {
            let langsMap = {
                "en" : "us",
                "ja" : "jp",
            }
            if(langsMap[lang]) {
                return langsMap[lang]
            }
            return lang
        },
        cardImage(image) {
            if(image) {
                return "https://image.tmdb.org/t/p/" + "w342" + image;
            } else {
                return "/img/imgError.png"
            }
            
        },
        voteRange(vote) {
            return Math.ceil(vote / 2);
        }
    },
    computed: {
        /* moviesList() {
            return state.moviesList;
        }, */
    },
}

</script>

<style lang="scss" scoped>

</style>