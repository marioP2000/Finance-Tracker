<template>
    <div id="balance-container">
        <h2>Total Balance:</h2>
        <h1>{{ total }}€</h1>
    </div>
</template>

<script setup>
const props = defineProps({
    total: {
        type: Number,
        required: true
    },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

#balance-container {
    margin: 2.5%;
    padding: 1%;
    color: $dark-font;
    border-radius: 6px;
}

h1 {
    border-bottom: 1px solid $border-color;
}

h2 {
    font-weight: normal;
    color: $light-font;
}
</style>