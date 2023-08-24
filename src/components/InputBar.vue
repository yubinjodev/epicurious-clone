<script setup>
import $ from "jquery"
import { ref } from "vue";
import {useRouter} from "vue-router"
const router = useRouter()

const query = ref("")

function submitQuery(){
    router.push(`/results/?search=${query.value}`)
    $(".InputBar-root").slideUp()
}

$(document).ready(function(){
    $("#home-input").click(function(){
    $(".InputBar-root").slideDown()
    $("#searchbar").focus()
})

$("#close").click(function(){
    $(".InputBar-root").slideUp()
})
})


</script>

<template>
    <section class="InputBar-root">
        <img alt="close" src="../assets/icons/close.svg" id="close"> 

        <form @submit.prevent="submitQuery">
            <input 
            id="searchbar"
            v-model="query"
            name="search"
            placeholder="fish" 
            >
        </form>
    </section>
</template>