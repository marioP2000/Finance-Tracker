<template>
    
    <div id="stats-container">

        <h1 id="header">Spendings:</h1>

        <!-- Hobby balance -->
        <div class="balance-container">
            <h2>Hobbys:</h2>
            <h1>{{ hobby }}€</h1>
        </div>

        <!-- Taxes balance -->
        <div class="balance-container">
            <h2>Taxes:</h2>
            <h1>{{ taxes }}€</h1>
        </div>

        <!-- Repairs balance -->
        <div class="balance-container">
            <h2>Repairs:</h2>
            <h1>{{ repairs }}€</h1>
        </div>

        <!-- Housing balance -->
        <div class="balance-container">
            <h2>Housing:</h2>
            <h1>{{ housing }}€</h1>
        </div>

        <!-- Transportation balance -->
        <div class="balance-container">
            <h2>Transportation:</h2>
            <h1>{{ transportation }}€</h1>
        </div>

    </div>

</template>

<script setup>
const props = defineProps({
    hobby: {
        type: Number,
        required: true
    },
    taxes: {
        type: Number,
        required: true
    },
    repairs: {
        type: Number,
        required: true
    },
    housing: {
        type: Number,
        required: true
    },
    transportation: {
        type: Number,
        required: true
    },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

#stats-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

#header {
    margin: 3.5%;
    color: $light-font;
}

// Container for each category
.balance-container {
    width: 95%;
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