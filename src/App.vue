<script setup>
import Navbar from "./components/Navbar.vue"
import InputBar from "./components/InputBar.vue";
import Bottom from "./components/Bottom.vue";
import Searchbar from "./components/Searchbar.vue";
</script>

<template>
    <header v-if="$route.path.includes('results') || $route.path.includes('recipe')">
        <Searchbar/>
    </header>
    <header v-else>
        <Navbar/>
    </header>
<main>
    <router-view :key="$route.fullPath"/>
    <InputBar/>
</main>

<Bottom/>
</template>
