<script setup>
import $ from "jquery"
import {ref} from "vue"
import { useRoute } from "vue-router";
import ResultCard from '../cards/ResultCard.vue';

// const route = useRoute()
// const query = route.query.search
// const results = ref({})

// $.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`, function(data){
//     results.value = data
//     console.log(results.value.meals.length);
// })
</script>

<template>
    <section class="Results-root">
        <p class="caption"> matching results for {{ $route.query.search }}</p>
        <ResultCard/>
    </section>

</template>

<style scoped>
.Results-root{
    background: #333333;
    color: #fff;
    height: 100%
}
</style>