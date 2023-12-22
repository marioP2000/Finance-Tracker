<template>
  <div class="about">
    <CategoryBalance 
    :salary="+salary" :investments="+investments" :other="+other"
    :hobby="+hobby" :taxes="+taxes" :repairs="+repairs" :housing="+housing" :transportation="+transportation" />
  </div>
</template>

<script setup>
import CategoryBalance from '@/components/CategoryBalance.vue';
import { ref, computed, onMounted } from "vue";

const transactions = ref([]);

onMounted(() => {
  // Get saved data from local storage
  const savedTransactions = JSON.parse(localStorage.getItem("transactions"));

  if(savedTransactions) {
    transactions.value = savedTransactions;
  }
});

// Get Salary income
const salary = computed(() => {
return transactions.value.filter((transaction) => transaction.incomeType === "Salary").reduce((acc, transaction) => {
  return acc + transaction.amount;
}, 0).toFixed(2);
});

// Get Investments income
const investments = computed(() => {
return transactions.value.filter((transaction) => transaction.incomeType === "Investments").reduce((acc, transaction) => {
  return acc + transaction.amount;
}, 0).toFixed(2);
});

// Get Other income
const other = computed(() => {
return transactions.value.filter((transaction) => transaction.incomeType === "Other").reduce((acc, transaction) => {
  return acc + transaction.amount;
}, 0).toFixed(2);
});

// Get Hobby expense
const hobby = computed(() => {
return transactions.value.filter((transaction) => transaction.expenseType === "Hobby").reduce((acc, transaction) => {
  return acc + transaction.amount;
}, 0).toFixed(2);
});

// Get Taxes expense
const taxes = computed(() => {
return transactions.value.filter((transaction) => transaction.expenseType === "Taxes").reduce((acc, transaction) => {
  return acc + transaction.amount;
}, 0).toFixed(2);
});

// Get Repairs expense
const repairs = computed(() => {
return transactions.value.filter((transaction) => transaction.expenseType === "Repairs").reduce((acc, transaction) => {
  return acc + transaction.amount;
}, 0).toFixed(2);
});

// Get Housing expense
const housing = computed(() => {
return transactions.value.filter((transaction) => transaction.expenseType === "Housing").reduce((acc, transaction) => {
  return acc + transaction.amount;
}, 0).toFixed(2);
});

// Get Transportation expense
const transportation = computed(() => {
return transactions.value.filter((transaction) => transaction.expenseType === "Transportation").reduce((acc, transaction) => {
  return acc + transaction.amount;
}, 0).toFixed(2);
});
</script>