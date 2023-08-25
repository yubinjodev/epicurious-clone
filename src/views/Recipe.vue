<script setup>
import { ref, watch } from "vue";
import filterIngredients from "../composables/filterIngredients";
import filterInstructions from "../composables/filterInstructions";
import getPost from "../composables/getPost";

const {id} = defineProps(["id"])
const {recipe} = getPost(id)
const ingredients = ref([])
const instructions = ref([])

watch(recipe, () => {
  ingredients.value = filterIngredients(recipe.value);
  instructions.value = filterInstructions(recipe.value.strInstructions)
});

</script>

<template>
    <section class="Recipe-root" v-if="recipe" >
        <div class="Recipe-root__card">
            <p class="label caption">COOKBOOKS</p>
            <h1>{{ recipe.strMeal }}</h1>
            <p class="caption">BY FRANKIE GAW</p>
            <time datetime="2023-01-09">January 9, 2023</time>
            <figure>
                <img alt="fish" v-if="recipe.strImageSource" :src="recipe.strImageSource">
                <img alt="fish" v-else :src="recipe.strMealThumb">
                <figcaption>Photo by Frankie Gaw</figcaption>
            </figure>
        </div>

        <div class="Recipe-root__text">
            <h2 class="caption">Ingredients</h2>
            <hr>
            <p class="servings caption">Makes 4 servings</p>
            <ul>
                <li v-if="ingredients" v-for="ingredient in ingredients">
                    {{ ingredient }}
                </li>
            </ul>

            <dl>
                <div v-if="instructions" v-for="(instruction, index) in instructions">
                    <dt>STEP {{ index+1 }}</dt>
                    <dd>{{ instruction }}</dd>
                </div>
            </dl>
        </div>
    </section>
</template>

<style>
.Recipe-root{
    margin-top: 9rem;
}
</style>