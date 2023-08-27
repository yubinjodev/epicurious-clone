<script setup>
import $ from "jquery";
import { watch } from "vue";
import MockCard from "../cards/MockCard.vue";
import ResultCard from '../cards/ResultCard.vue';
import getPosts from "../composables/getPosts";

const { query } = defineProps(["query"])
const { results, recipesLength } = getPosts(query)

watch(results, ()=>{
    if(results.value !== 404){
        $(".Results-root").css("height", "100%")
        $(".Bottom-root").css({
            "position": "unset",
        })
    }
    if(results.value === 404 || !results){
        $(".Bottom-root").css({
            "position": "sticky",
            "bottom":"0",
            "left":"0",
        })
    }
})
</script>

<template>
    <section class="Results-root">
        <p class="caption" v-if="recipesLength">
            {{ recipesLength }} matching results for {{ $route.query.search }}
        </p>
        <div class="Results-root__alt" v-if="!recipesLength && results !== 404">
            <p class="caption">Loading...</p>
            <MockCard/>
            <MockCard/>
        </div>

        <p v-if="results === 404">
            Uh oh. We didn't find the search term <span>"{{ $route.query.search }}"</span> that you were looking for.
        </p>

        <div class="Results-root__cards-container">
            <div class="Results-root__cards">
                <ResultCard 
                :result="result" 
                v-for="result in results.meals" 
                :key="result.idMeal"
                />
            </div>
        </div>
    </section>

</template>

<style scoped>
.Results-root{
    background: #333333;
    color: #fff;
    height: 100vh
}

span{
    font-style: italic;
    text-decoration: underline;
}
</style>