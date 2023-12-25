<template>
    <div class="about">
      <!-- Income -->
      <IncomeCategories 
        :salary="salary" :investment="investment" :other="other"/>
  
      <!-- Chart -->
      <IncomeChart
      :income="income" :salary="salary" :investment="investment" :other="other" />
    </div>
  </template>
  
<script setup>
    import IncomeCategories from "@/components/IncomePage/IncomeCategories.vue";
    import IncomeChart from "@/components/IncomePage/IncomeChart.vue";
    import { ref, computed, onMounted } from "vue";
  
    const transactions = ref([]);
    
    onMounted(() => {
        // Get saved data from local storage
        const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
    
        if(savedTransactions) {
        transactions.value = savedTransactions;
        }
    });
    
    // Get income
    const income = computed(() => {
    return transactions.value.filter((transaction) => transaction.amount > 0).reduce((acc, transaction) => {
        return acc + transaction.amount;
    }, 0).toFixed(2);
    });

    // Get Salary income
    const salary = computed(() => {
    return transactions.value.filter((transaction) => transaction.incomeType === "Salary").reduce((acc, transaction) => {
        return acc + transaction.amount;
    }, 0).toFixed(2);
    });

    // Get Investment income
    const investment = computed(() => {
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
</script>