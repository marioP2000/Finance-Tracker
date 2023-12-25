<template>
  <div class="about">
    <!-- Expenses -->
    <ExpensesCategories 
    :hobby="+hobby" :taxes="+taxes" :repairs="+repairs" :housing="+housing" :transportation="+transportation" />

    <!-- Chart -->
    <ExpensesChart
    :hobby="+hobby" :taxes="+taxes" :repairs="+repairs" :housing="+housing" :transportation="+transportation" :expenses="+expenses" />
  </div>
</template>

<script setup>
import ExpensesCategories from '@/components/ExpensesPage/ExpensesCategories.vue';
import ExpensesChart from "@/components/ExpensesPage/ExpensesChart.vue";
import { ref, computed, onMounted } from "vue";

const transactions = ref([]);

onMounted(() => {
  // Get saved data from local storage
  const savedTransactions = JSON.parse(localStorage.getItem("transactions"));

  if(savedTransactions) {
    transactions.value = savedTransactions;
  }
});

// Get expenses
const expenses = computed(() => {
  return transactions.value.filter((transaction) => transaction.amount < 0).reduce((acc, transaction) => {
    let expensesNegative = acc - transaction.amount;
    return Math.abs(expensesNegative);
  }, 0).toFixed(2);
});

// Get Hobby expense
const hobby = computed(() => {
return transactions.value.filter((transaction) => transaction.expenseType === "Hobby").reduce((acc, transaction) => {
  let hobbyNegative = acc - transaction.amount;
  return Math.abs(hobbyNegative);
}, 0).toFixed(2);
});

// Get Taxes expense
const taxes = computed(() => {
return transactions.value.filter((transaction) => transaction.expenseType === "Taxes").reduce((acc, transaction) => {
  let taxesNegative = acc - transaction.amount;
  return Math.abs(taxesNegative);
}, 0).toFixed(2);
});

// Get Repairs expense
const repairs = computed(() => {
return transactions.value.filter((transaction) => transaction.expenseType === "Repairs").reduce((acc, transaction) => {
  let repairsNegative = acc - transaction.amount;
  return Math.abs(repairsNegative);
}, 0).toFixed(2);
});

// Get Housing expense
const housing = computed(() => {
return transactions.value.filter((transaction) => transaction.expenseType === "Housing").reduce((acc, transaction) => {
  let housingNegative = acc - transaction.amount;
  return Math.abs(housingNegative);
}, 0).toFixed(2);
});

// Get Transportation expense
const transportation = computed(() => {
return transactions.value.filter((transaction) => transaction.expenseType === "Transportation").reduce((acc, transaction) => {
  let transportationNegative = acc - transaction.amount;
  return Math.abs(transportationNegative);
}, 0).toFixed(2);
});
</script>