<template>
    <div>
        <!-- div lista film -->
        <div>
            <TheCard :moviesList="moviesList"></TheCard>
        </div>

        <!-- div lista serie -->
        <div>
            <TheCard :seriesList="seriesList"></TheCard>
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