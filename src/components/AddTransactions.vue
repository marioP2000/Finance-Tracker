<template>
  <form id="form" @submit.prevent="onSubmit">

    <h2>Add new transaction</h2>

    <!-- Transaction Name -->
    <div>
      <label for="text">Text</label>
      <br>
      <input type="text" id="text" v-model="text" placeholder="Enter text..." />
    </div>

    <!-- Transaction Amount -->
    <div>
      <label for="amount">Amount</label>
      <input type="text" id="amount" v-model="amount" placeholder="Enter amount..." />
    </div>

    <!-- Income Type -->
    <div class="expense-income-container">
      <label for="incomeType">Income Type:</label>
      <select name="incomeTypes" id="incomeTypes">
        <option value="" disabled selected hidden>Select an income type</option>
        <option value="Salary">Salary</option>
        <option value="Investments">Investments</option>
        <option value="Other">Other</option>
      </select>
      <div class="delete-btn" @click="clearIncome">x</div>
    </div>

    <!-- Expense Type -->
    <div class="expense-income-container">
      <label for="expenseType">Expense Type:</label>
      <select name="expenseTypes" id="expenseTypes">
        <option value="" disabled selected hidden>Select an expense type</option>
        <option value="Hobby">Hobby</option>
        <option value="Taxes">Taxes</option>
        <option value="Repairs">Repairs</option>
        <option value="Housing">Housing</option>
        <option value="Transportation">Transportation</option>
      </select>
      <div class="delete-btn" @click="clearExpense">x</div>
    </div>

    <!-- Transaction Date -->
    <div>
      <label for="date">Date:</label>
      <input type="date" id="date" v-model="date" name="date"> 
    </div>

    <!-- Submit Button -->
    <button id="submit-btn">Add transaction</button>

  </form>
</template>

<script setup>
import { ref } from "vue";

import { useToast } from "vue-toastification";

const text = ref("");
const amount = ref("");
const date = ref("");

const toast = useToast();

const emit = defineEmits(["transactionSubmitted"]);

const onSubmit = () => {
  // Send error message if empty fields
  if(!text.value || !amount.value || !date.value || !incomeTypes.value && !expenseTypes.value) {
    toast.error("All fields must be filled");
    return;
  }

  // Send error message if both type fields are selected
  if(incomeTypes.value && expenseTypes.value) {
    toast.error("Choose either Income or Expense");
    expenseTypes.selectedIndex = 0;
    incomeTypes.selectedIndex = 0;
    return;
  }

  // Send error if number is negative
  if(amount.value < 0) {
    toast.error("Remove special characters before amount");
    return;
  }

  // Convert positive amount to negative if expense type is selected
  if(amount.value > 0 && expenseTypes.value) {
    let value = -Math.abs(amount.value);
    amount.value = value;
  }

  // Emit transaction data
  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value),
    expenseType: expenseTypes.value,
    incomeType: incomeTypes.value,
    date: date.value
  }

  emit("transactionSubmitted", transactionData);

  // Empty fields after submit
  text.value = "";
  amount.value = "";
  expenseTypes.selectedIndex = 0;
  incomeTypes.selectedIndex = 0;
  date.value = "";
}

const clearIncome = () => {
  incomeTypes.selectedIndex = 0;
}

const clearExpense = () => {
  expenseTypes.selectedIndex = 0;
}
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  min-height: 75vh;
  width: 25%;
  text-align: center;
  color: $light-font;
  background: linear-gradient(45deg, #f1f5f9, #e2e8f0);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

// Add transaction header
h2 {
  border-bottom: 1px solid $border-color;
}

// Input name
label {
  font-size: 1.3rem;
}

input {
  margin-top: 7.5%;
  padding: 2.5%;
  font-size: 1.3rem;
  font-weight: bold;
  color: $dark-font;
  background: none;
  border: none;
  border-bottom: 1px solid $border-color;
  outline: none;
}

// Clear fields button
.expense-income-container {
  position: relative;
}

.delete-btn {
    position: absolute;
    top: 50%;
    right: 5%;
    width: 25px;
    height: 25px;
    background: linear-gradient(45deg, red, rgb(204, 59, 59));
    font-size: 1rem;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.2s;
    padding: 1%;

    &:hover {
        width: 25px;
        height: 25px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    }
}

// Submit button
#submit-btn {
  padding: 2%;
  font-size: 1.2rem;
  color: $light-font;
  background: none;
  border-radius: 6px;
  border: none;
  border: 1px solid $border-color;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: $dark-font;
    box-shadow: inset 200px 0 0 0 #dfdfdf;
  }
}

// Transaction types
select {
  margin-top: 5%;
  padding: 2%;
  font-size: 1.1rem;
  color: $dark-font;
  background: none;
  border: none;
  border-bottom: 1px solid $border-color;
}

@media(width: 800px) {
  form {
    min-height: 100vh;
  }
}
</style>