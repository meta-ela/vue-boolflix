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


export default {
    name: 'TheMain',
    components: {
    TheCard
    },

    
}
</script>

<style lang="scss" scoped>

</style>