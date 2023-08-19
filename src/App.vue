<script setup>
import Navbar from "./components/Navbar.vue"
import Home from "./components/Home.vue"
import Searchbar from "./components/Searchbar.vue";
import Results from "./components/Results.vue";
import Recipe from "./components/Recipe.vue";
import Bottom from "./components/Bottom.vue";
import InputBar from "./components/InputBar.vue";
</script>

<script>
$("#close").click(function(){
    alert("hello")
})
</script>

<template>
<Navbar/>
<!-- <Searchbar/> -->
<main>
    <Home/>
    <InputBar/>
    <!-- <Results/> -->
    <!-- <Recipe/> -->
</main>

<Bottom/>
</template>
