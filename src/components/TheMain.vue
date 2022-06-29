<template>
    <div>
        <!-- div lista film -->
        <div>
            <TheCard></TheCard>
        </div>

        <!-- div lista serie -->
        <div></div>
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

    /* computed: {
        moviesList() {
            return state.moviesList;
        },
    }, */
}
</script>

<style lang="scss" scoped>

</style>