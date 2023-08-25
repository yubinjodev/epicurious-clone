<script setup>
import { onUnmounted, ref, watch } from "vue";
import filterIngredients from "../composables/filterIngredients";
import getPost from "../composables/getPost";

const {id} = defineProps(["id"])
const {recipe} = getPost(id)
const ingredients = ref([])

watch(recipe, () => {
    console.log("recipe",recipe.value);
  ingredients.value = filterIngredients(recipe.value);
  console.log("ingredients",ingredients.value);
});

onUnmounted(() => {
  ingredients.value = null
  console.log("unmounted");
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
                <li>One 1 1/2- to 2-pound whole tilapia, snapper, or striped sea bass, cleaned and scaled</li>
                <li>1 tsp. kosher salt</li>
                <li>1 Tbsp. Shaoxing wine or sake</li>
                <li>1/2 Tbsp. soy sauce</li>
                <li>1/2 tsp. honey</li>
                <li>1/2 Tbsp. water</li>
                <li>2 thumb-sized knobs of ginger, peeled and thinly sliced lengthwise</li>
                <li>4 scallions, green and white parts</li>
                <li>3 Tbsp. grapeseed oil, peanut oil, or vegetable oil</li>
            </ul>

            <dl>
                <dt>Step 1</dt>
                <dd>With kitchen shears, remove the fins on the sides and bottom of the fish. 
                    With a knife, scrape against the fish to remove any scales that still 
                    remain. Rinse the fish with cold water and pat dry. Starting just behind 
                    the fin, cut three parallel lines diagonally across the fish then place
                    onto a heatproof plate. Season the fish with the salt. Pour the 
                    Shaoxing wine on both sides of the fish. Mix together the soy sauce,
                    honey, and water in a bowl, and then pour on both sides of the fish.
                </dd>
                
                <dt>Step 2</dt>
                <dd>Stack a few ginger slices at a time and cut into thin strips. Repeat until
                    all the ginger has been cut. Place half the ginger strips into the cavity
                    of the fish and the other half on top of the fish. Slice the scallions 
                    into thirds crosswise, then cut lengthwise into long, thin strips; set 
                    aside. Place the plate of fish into a bamboo steamer. If you don’t have 
                    a bamboo steamer, place the plate on a metal steamer basket and put a lid
                    on the pot to cover. If the fish doesn’t fit on the plate, cut the tail 
                    and place it next to the fish.
                </dd>
                
                <dt>Step 3</dt>
                <dd>Fill a pot that will fit your steamer with an inch of water and bring to a 
                    boil. Place the steamer in the pot and cover. Steam for 10 minutes, until 
                    the fish is tender but not flaky and overcooked. The fish’s eyes will be 
                    completely opaque when it’s ready. Sprinkle the scallion strips all over 
                    the top of the fish and continue steaming, covered, for 2 minutes.
                </dd>
                
                <dt>Step 4</dt>
                <dd>In a small skillet over high heat, warm the oil until it’s very hot (it will
                    be glistening). Remove from the heat and carefully pour all over the scallion
                    strips atop the fish; it will sizzle. Serve immediately.
                </dd>
            </dl>
        </div>
    </section>
</template>

<style>
.Recipe-root{
    margin-top: 9rem;
}
</style>