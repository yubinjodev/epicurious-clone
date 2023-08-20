<script setup>
import {useRouter} from "vue-router"
const router = useRouter()

function handleClickRecipeCard(){
    router.push("/recipe/test")
}
</script>

<template>
    <article class="ResultCard-root" @click="handleClickRecipeCard">
        <img alt="fish" src="../assets/images/fish-recipe.png"/>
        <div class="ResultCard-root__text">
            <strong class="caption">RECIPE</strong>
            <h1>Whole Steamed Fish</h1>
            <span class="rating caption">
                <span class="rating__stars">0/5</span>
                <span class="rating__reviews">REVIEWS (31)</span>
            </span>
        </div>
    </article>
</template>