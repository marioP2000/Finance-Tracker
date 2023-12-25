<template>

    <h1 id="header">Income</h1>
    
    <div id="stats-container">


        <!-- Salary balance -->
        <div class="balance-container">
            <h2>Salary:</h2>
            <h1>{{ salary }}€</h1>
        </div>

        <!-- Investments balance -->
        <div class="balance-container">
            <h2>Investments:</h2>
            <h1>{{ investment }}€</h1>
        </div>

        <!-- Other balance -->
        <div class="balance-container">
            <h2>Other:</h2>
            <h1>{{ other }}€</h1>
        </div>

    </div>

</template>

<script setup>
const props = defineProps({
    salary: {
        type: Number,
        required: true
    },
    investment: {
        type: Number,
        required: true
    },
    other: {
        type: Number,
        required: true
    },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

#stats-container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
}

#header {
    margin: 3.5%;
    color: $light-font;
}

// Container for each category
.balance-container {
    min-width: 19vw;
    margin: 2.5%;
    padding: 1%;
    color: $dark-font;
    border-radius: 6px;
}

// Category amount
h1 {
    border-bottom: 1px solid $border-color;
}

// Category type
h2 {
    font-weight: normal;
    color: $light-font;
}
</style>