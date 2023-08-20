<script setup>
import $ from "jquery"
import {useRouter} from "vue-router"
const router = useRouter()

function submitQuery(e){
    const inputValue = e.target[0].value
    router.push(`/results?search=${inputValue}`)
    $(".InputBar-root").slideUp()
}
</script>

<template>
    <section class="InputBar-root">
        <img alt="close" src="../assets/icons/close.svg" id="close"> 

        <form @submit.prevent="submitQuery">
            <input 
            name="search"
            placeholder="Find a Recipe" 
            >
        </form>
    </section>
</template>