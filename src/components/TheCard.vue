<template>
    <div class="row row-cols-3 g-3">
        <div class="col" v-for="(movie, i) in moviesList" :key="i">
            <div class="my_card position-relative">
                <div>
                    <img class="w-100" :src="cardImage(movie.poster_path)" :alt="movie.original_title"/>
                </div>

                <div class="card_overlay">
                    <div> <strong>Original Title: </strong> {{ movieTitle(movie.original_title) }}</div>
                    <div> <strong>Original Language: </strong> {{ countryFlag(movie.original_language) }} 
                        <span class="fi " :class="'fi-' + countryFlag(movie.original_language)"></span>
                    </div>
                    <div> <strong>Average Vote:</strong>  {{ voteRange(movie.vote_average) }}/5</div>
                    <div>
                        <span v-for="i in 5" :key="i">
                            <i v-if="i <= voteRange(movie.vote_average)" class="fa-solid fa-star text-warning"></i>
                            <i v-else class="fa-regular fa-star text-warning"></i>
                        </span>
                    </div>
                    <div>
                        <strong>Overview: </strong> {{ movieOverview(movie.overview) }}
                    </div>
                </div>
            </div>

            
        </div>
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
                return "https://image.tmdb.org/t/p/" + "w500" + image;
            } else {
                return "/img/imgError.png"
            }
            
        },
        voteRange(vote) {
            return Math.ceil(vote / 2);
        },
        movieTitle(title) {
            if(title) {
                return title
            } else {
                return "movie.original_name"
            }
        },
        movieOverview(overview){
            if(overview) {
                return overview
            } else {
                return "no description"
            }
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