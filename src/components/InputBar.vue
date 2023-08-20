<script setup>

function submitQuery(){
    this.$router.push("/cock")
}
</script>

<template>
    <section class="InputBar-root">
        <img alt="close" src="../assets/icons/close.svg" id="close"> 
        <form>
            <input 
            name="recipe"
            placeholder="Find a Recipe" 
            @keypress.enter=""
            >
            <button type="submit">send</button>
        </form>
    </section>
</template>