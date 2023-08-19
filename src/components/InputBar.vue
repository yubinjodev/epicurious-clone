<script setup>

function submitQuery(){
    router.push("/cock")
}
</script>

<template>
    <section class="InputBar-root">
        <img alt="close" src="../assets/icons/close.svg" id="close"> 
        <input placeholder="Find a Recipe" @keypress.enter="submitQuery()">
    </section>
</template>