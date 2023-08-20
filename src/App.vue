<script setup>
import Navbar from "./components/Navbar.vue"
import Searchbar from "./components/Searchbar.vue";
import Bottom from "./components/Bottom.vue";
import InputBar from "./components/InputBar.vue";
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
    <RouterView/>
    <InputBar/>
</main>

<Bottom/>
</template>
