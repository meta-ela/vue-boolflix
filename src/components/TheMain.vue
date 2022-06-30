<template>
    <div class="container">
        <!-- div lista film -->
        <div  v-if="moviesList">
            <h1>FILM</h1>
            <TheCard :moviesList="moviesList"></TheCard>
        </div>
        <div v-else class="alert bg-danger text-white text-uppercase text-center"> errore richiesta</div>

        <!-- div lista serie -->
        <div  v-if="seriesList">
            <h1>SERIE</h1>
            <TheCard :moviesList="seriesList"></TheCard>
        </div>
        <div v-else class="alert bg-danger text-white text-uppercase text-center"> errore richiesta</div>
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