<script setup>
import ResultCard from '../cards/ResultCard.vue';
import getPosts from "../composables/getPosts"

const { query } = defineProps(["query"])
const { results, recipesLength } = getPosts(query)

</script>

<template>
    <section class="Results-root">
        <p class="caption" v-if="recipesLength">
            {{ recipesLength }} matching results for {{ $route.query.search }}
        </p>
            <ResultCard 
            :result="result" 
            v-for="result in results.meals" 
            :key="result.idMeal"
            />
    </section>

</template>

<style scoped>
.Results-root{
    background: #333333;
    color: #fff;
    height: 100%
}
</style>