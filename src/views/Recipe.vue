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
    <article class="Recipe-root" v-if="recipe" >
        <section class="Recipe-root__card">
            <div>
                <p class="label caption">COOKBOOKS</p>
                <h1>{{ recipe.strMeal }}</h1>
                <p class="caption">BY FRANKIE GAW</p>
                <time datetime="2023-01-09">January 9, 2023</time>
            </div>
            <figure>
                <img :alt="recipe.strMeal" v-if="recipe.strImageSource" :src="recipe.strImageSource">
                <img :alt="recipe.strMeal" v-else :src="recipe.strMealThumb">
                <figcaption>Photo by Frankie Gaw</figcaption>
            </figure>
        </section>

        <section class="Recipe-root__text">
            <div>
                <h2 class="caption">Ingredients</h2>
                <hr>
                <p class="servings caption">Makes 4 servings</p>
                <ul>
                    <li v-if="ingredients" v-for="ingredient in ingredients">
                        {{ ingredient }}
                    </li>
                </ul>
            </div>

            <div>
                <h2 class="caption">Instructions</h2>
                <hr>
                <dl v-if="instructions" v-for="(instruction, index) in instructions">
                    <dt>STEP {{ index+1 }}</dt>
                    <dd>{{ instruction }}</dd>
                </dl>
            </div>
        </section>
    </article>
</template>

<style>
.Recipe-root{
    margin-top: 9rem;
}

h3{
    font-size: 2.5rem;
}
</style>
