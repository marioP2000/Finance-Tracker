<template>
    <div id="income-expenses-container">

        <!-- Income -->
        <div class="income-expenses">
            <h2>Income:</h2>
            <p class="money plus">+{{ income }}€</p>
        </div>

        <!-- Expenses -->
        <div class="income-expenses">
            <h2>Expenses:</h2>
            <p class="money minus">{{ expenses }}€</p>
        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    income: {
        type: Number,
        required: true
    },
    expenses: {
        type: Number,
        required: true
    }
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

#income-expenses-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    min-height: 20vh;
    margin: 2.5%;
    padding: 1%;
    color: $dark-font;
    border-radius: 6px;
}

.income-expenses {
    min-width: 25vh;
    margin: 7.5% 0;
    border-bottom: 1px solid $border-color;
}

// Income amount and Expenses amount
p {
    padding: 5%;
    font-size: 1.3rem;
    font-weight: bold;
}

// Income heading and Expenses heading
h2 {
    margin-bottom: 2.5%;
    font-weight: normal;
    color: $light-font;
}

// Income and Expenses classes
.minus {
    border-left: 4px solid red;
}

.plus {
    border-left: 4px solid green;
}
</style>