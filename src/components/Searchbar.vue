<script setup>
import { ref } from "vue";
import {useRouter} from "vue-router"
const router = useRouter()

const query = ref("")

function submitQuery(){
    router.push(`/results/?search=${query.value}`)
}
</script>

<template>
    <div class="Searchbar-root">
        <a href="/">
            <img alt="text logo" src="../assets/icons/logo/text-logo-white.svg">
        </a>
        <form @submit.prevent="submitQuery">
            <label for="search" hidden>Search</label>
            <input 
            id="search"
            v-model="query"
            name="search"
            :placeholder="query"
            >
        </form>
    </div>
</template>