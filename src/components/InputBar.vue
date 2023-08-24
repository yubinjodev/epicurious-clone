<script setup>
import $ from "jquery"
import { ref } from "vue";
import {useRouter} from "vue-router"
const router = useRouter()

const query = ref("")

function submitQuery(e){
    router.push(`/recipe/?search=${query.value}`)
    $(".InputBar-root").slideUp()
}

</script>

<template>
    <section class="InputBar-root">
        <img alt="close" src="../assets/icons/close.svg" id="close"> 

        <form @submit.prevent="submitQuery">
            <input 
            v-model="query"
            name="search"
            placeholder="Find a Recipe" 
            >
        </form>
    </section>
</template>