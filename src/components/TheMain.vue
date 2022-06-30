<template>
    <div class="overflow-auto">
        <div class="container ">
            <!-- div lista film -->
            <div class="py-5" v-if="moviesList">
                <h2 class="text-white fw-bold">FILM</h2>
                <TheCard :moviesList="moviesList"></TheCard>
            </div>
            <div v-else class="alert bg-danger text-white text-uppercase text-center"> errore richiesta</div>

            <!-- div lista serie -->
            <div v-if="seriesList">
                <h2 class="text-white fw-bold">SERIE</h2>
                <TheCard :moviesList="seriesList"></TheCard>
            </div>
            <div v-else class="alert bg-danger text-white text-uppercase text-center"> errore richiesta</div>
        </div>
    </div>    
</template>

<script>
import TheCard from './TheCard.vue';
/* import {state} from "../store"; */

export default {
    name: 'TheMain',
    components: {
    TheCard
    },

    props: {
        moviesList: Array,
        seriesList: Array,
    }

    /* computed: {
        moviesList() {
            return state.moviesList;
        },
    }, */
}
</script>

<style lang="scss" scoped>

</style>