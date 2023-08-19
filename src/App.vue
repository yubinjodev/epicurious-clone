<script setup>
import Navbar from "./components/Navbar.vue"
import Home from "./components/Home.vue"
import Searchbar from "./components/Searchbar.vue";
import Results from "./components/Results.vue";
import Recipe from "./components/Recipe.vue";
import Bottom from "./components/Bottom.vue";
</script>

<template>
<Navbar/>
<!-- <Searchbar/> -->
<main>
    <!-- <Home/> -->
    <!-- <Results/> -->
    <Recipe/>
</main>

<Bottom/>
</template>
