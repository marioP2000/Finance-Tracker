<template>
    <div id="past-expenses-container">

        <div id="expense-example">
            <h3 class="example">Name</h3>
            <h4 class="example">Category</h4>
            <h2 class="example">Amount</h2>
            <p class="example">Date</p>
        </div>

        <TransitionGroup name="list">
            <div class="expense" v-for="transaction in transactions" :key="transaction.id" :class="transaction.amount < 0 ? 'negative' : 'positive'">

                <div id="expense-content">
                    <h3>{{ transaction.text }}</h3>
                    <h4>{{ transaction.incomeType }}</h4>
                    <h4>{{ transaction.expenseType }}</h4>
                    <h2>{{ transaction.amount }}€</h2>
                    <p>{{ transaction.date }}</p>
                </div>

                <div id="mobile-view">
                    <div id="name-type">
                        <h3>{{ transaction.text }}</h3>
                        <h4>{{ transaction.incomeType }}</h4>
                        <h4>{{ transaction.expenseType }}</h4>
                    </div>

                    <h2>{{ transaction.amount }}€</h2>
                    <p>{{ transaction.date }}</p>

                </div>
                <button @click="deleteTransaction(transaction.id), show = !show" id="delete-btn">x</button>
            </div>
        </TransitionGroup>

        
    </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);

const props = defineProps({
    transactions: {
        type: Array,
        requirement: true
    }
});

// Emit individual transaction deletions
const emit = defineEmits(["transactionDeleted"]);

const deleteTransaction = (id) => {
    emit("transactionDeleted", id);
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

#mobile-view {
    display: none;
}

#past-expenses-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
}

// Individual expense
.expense {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    margin: 1% 0;
    padding: 0 1.5%;
    border-bottom: 1px solid $border-color;
}

#expense-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

// Transaction name and transaction amount
h3, h2 {
    padding: 1%;
}

// Transaction name
h3 {
    color: $dark-font;
    // font-weight: normal;
    font-size: 1.3rem;
}

// Transaction amount
h2 {
    color: $dark-font;
}

// Transaction type
h4 {
    position: absolute;
    top: 30%;
    left: 50%;
    font-size: 1.1rem;
    font-weight: normal;
    color: $light-font;
}

// Transaction date
p {
    position: absolute;
    top: 30%;
    left: 70%;
    font-size: 1.1rem;
    color: $light-font;
}

// Transaction classes
.positive {
    border-left: 5px solid green;
}

.negative {
    border-left: 5px solid red;
}

// Individual transaction delete button
#delete-btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 25px;
    height: 25px;
    opacity: 0;
    background: linear-gradient(45deg, red, rgb(204, 59, 59));
    font-size: 1rem;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        width: 25px;
        height: 25px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    }
}

#expense-example {
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    margin: 1% 0;
    padding: 0 1.5%;
    border: 1px solid $border-color;
    border-radius: 6px;
}

.example {
    font-weight: bold;
    font-size: 1.3rem;
    color: $dark-font;
}

@media (max-width: 800px) {
    #transaction-menu-container {
        min-width: 45vw;
    }

    #mobile-view {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .expense {
        min-height: 18vh;
    }

    #expense-content {
        display: none;
    }

    #expense-example {
        display: none;
    }

    #name-type {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        
    }

    p {
        left: 0;
        top: 0;
        margin-left: 3%;
    }

    // Transaction type
    h4 {
        position: static;
        padding: 1%;
    }

    #delete-btn {
        opacity: 1;
    }
}

// Show delete button when hovering over expense
.expense:hover #delete-btn {
    opacity: 1;
}

// Transitions
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>