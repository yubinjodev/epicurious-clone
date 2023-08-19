<script setup>
import {ref, computed} from "vue"

import Navbar from "./components/Navbar.vue"
import Home from "./components/Home.vue"
import Searchbar from "./components/Searchbar.vue";
import Results from "./components/Results.vue";
import Recipe from "./components/Recipe.vue";
import Bottom from "./components/Bottom.vue";
import InputBar from "./components/InputBar.vue";

const routes={
    "/": Home,
    "/results":Results
}

const currentPath = ref(window.location.hash)

window.addEventListener("hashchange", function(){
    currentPath.value = window.location.hash
})

const currentView = computed(function(){
    return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<script>
import $ from "jquery"
export default {
    mounted: function(){
        $(document).ready(function(){
            $("#home-input").click(function(){
               $(".InputBar-root").slideDown()
            })
    
            $("#close").click(function(){
                $(".InputBar-root").slideUp()
            })
    
            $("#more").click(function(){
                $(".Bottom-root__more").slideToggle()
            })
    
            $("#connect").click(function(){
                $(".Bottom-root__connect").slideToggle()
            })
        })
    }
}
</script>

<template>
<Navbar/>
<main>
    <component :is="currentView"/>
    <InputBar/>
</main>

<Bottom/>
</template>
