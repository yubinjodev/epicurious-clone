<script setup>
import { useRouter } from "vue-router";
const router = useRouter()
const props = defineProps(["result"])

const {strMeal, strCategory, strTags, strMealThumb, idMeal } = props.result

const handleClickRecipeCard = ()=> {
    router.push({
        name: "Recipe",
        params: {id: idMeal}
    })
}
</script>

<template>
    <article class="ResultCard-root" @click="handleClickRecipeCard">
        <img :alt="strMeal" :src="strMealThumb"/>
        <section class="ResultCard-root__text">
            <strong class="caption">{{strCategory.toUpperCase()}}</strong>
            <h1>{{ strMeal }}</h1>
            <ul class="ResultCard-root__tags">
                <li v-if="strTags" v-for="tag in strTags.split(',')">#{{ tag.toLowerCase() }}</li>
            </ul>
        </section>
    </article>
</template>