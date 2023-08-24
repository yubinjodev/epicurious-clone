<script setup>
import Navbar from "./components/Navbar.vue"
import InputBar from "./components/InputBar.vue";
import Bottom from "./components/Bottom.vue";

</script>

<template>
<Navbar/>
<main>
    <RouterView/>
    <InputBar/>
</main>

<Bottom/>
</template>
