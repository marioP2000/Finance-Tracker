<template>

  <div class="home">

    <div id="header">

      <!-- Balance, Income, Expenses -->
      <div id="left-header">
        <Balance :total="+total" />
        <IncomeExpenses :income="+income" :expenses="+expenses" />
        <button @click="show = !show" id="add-transaction-button">Add new transaction</button>
      </div>

      <!-- Add Transaction Menu -->
      <Transition>
      <div id="transaction-menu-container" v-if="show">
        <AddTransactions @transactionSubmitted="handleTransactionSubmitted" id="transaction-menu" />
        <button class="deleteBtn" @click="show = !show">x</button>
      </div>
      </Transition>

    </div>

    <!-- Past Expenses -->
    <PastExpenses :transactions="transactions" @transactionDeleted="handleTransactionDeleted" />

  </div>

</template>

<script setup>
import Balance from "../components/Balance.vue";
import IncomeExpenses from '@/components/IncomeExpenses.vue';
import PastExpenses from "@/components/PastExpenses.vue";
import AddTransactions from "@/components/AddTransactions.vue";

import { ref, computed, onMounted } from "vue";

import { useToast } from "vue-toastification";

const show = ref(false);

const toast = useToast();

const transactions = ref([]);

onMounted(() => {
  // Get saved data from local storage
  const savedTransactions = JSON.parse(localStorage.getItem("transactions"));

  if(savedTransactions) {
    transactions.value = savedTransactions;
  }
});

// Get total
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0).toFixed(2);
});

// Get income
const income = computed(() => {
  return transactions.value.filter((transaction) => transaction.amount > 0).reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0).toFixed(2);
});

// Get expenses
const expenses = computed(() => {
  return transactions.value.filter((transaction) => transaction.amount < 0).reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0).toFixed(2);
});

// Add transaction
const handleTransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount,
    incomeType: transactionData.incomeType,
    expenseType: transactionData.expenseType,
    date: transactionData.date
  });

  saveTransactionsToLocalStorage();

  toast.success("Transaction added");
};

// Generate unique ID
const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
};

// Delete transaction
const handleTransactionDeleted = (id) => {
  
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id);

  saveTransactionsToLocalStorage();

  toast.success("Transaction deleted");
};

// Save to localstorage
const saveTransactionsToLocalStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions.value));
}
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

#header {
  display: flex;
  align-items: center;
}

// Balance, Income, Expenses, Add new transaction button
#left-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5%;
}

#add-transaction-button {
  min-width: 25vh;
  margin: 2.5%;
  padding: 5%;
  text-align: start;
  font-size: 1.2rem;
  color: $light-font;
  background: none;
  border-radius: 6px;
  border: 1px solid $border-color;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: $dark-font;
    box-shadow: inset 250px 0 0 0 #dfdfdf;
  }
}

// Add transaction menu
#transaction-menu-container {
  position: fixed;
  top: 0%;
  right: 0%;
  z-index: 999;
  width: 25%;
  box-shadow: 2px 2px 6px black;
}

#transaction-menu {
  width: 100%;
  height: 100vh;
}

.deleteBtn {
  position: absolute;
  top: 0;
  right: 0;
  width: 35px;
  height: 35px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(45deg, red, rgb(204, 59, 59));
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  }
}

// Transitions: Add transaction menu
.v-enter-from {
  opacity: 0;
  transform: translateX(800px);
}

.v-enter-active {
  transition: all 0.3s ease-out; 
}

.v-leave-to {
  opacity: 0;
  transform: translateX(800px);
}

.v-leave-active {
  transition: all 0.3s ease-in; 
}

@media (max-width: 1500px) {
  #transaction-menu-container {
    min-width: 40vw;
  }
}

@media (max-width: 800px) {
  #left-header {
    width: 100%;
  }

  #transaction-menu-container {
    min-width: 45vw;
  }

  #add-transaction-button {
    width: 95%;
    text-align: center;

    &:hover {
      box-shadow: none;
    }
  }
}

@media (max-width: 600px) {
  #transaction-menu-container {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100vw;
  }
}
</style>