<template>

    <h1 id="header">Chart</h1>
    <h2>Category income compared to total income</h2>

    <div id="chart-container">
        <canvas id="myChart"></canvas>
    </div>

</template>

<script setup>
import { onMounted } from "vue";

const props = defineProps({
    income: {
        type: Number,
        required: true
    },
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

// Chart
import Chart from "chart.js/auto";

// Set chart default styles
Chart.defaults.font.family = "'Roboto', sans-serif";
Chart.defaults.font.size = 16;
Chart.defaults.font.weight = "bold";
Chart.defaults.color = "#1f2937";
Chart.defaults.maintainAspectRatio = false;
Chart.defaults.responsive = true;

// Chart categories
const labels = [
    "Salary",
    "Investment",
    "Other"
];

// Chart data
const data = {
    labels: labels,
    datasets: [{
        label: "Income",
        backgroundColor: "rgba(0, 255, 0, 0.5)",
        data: []
    }]
};

// Chart settings
const config = {
    type: "bar",
    data: data,
    options: {
        scales: {
            y: {
                ticks: {
                callback: value => `${value }€`
                }
            }
        },
        layout: {
            padding: 25
        },
    }
};

onMounted(() => {
    // Load chart
    setTimeout(() => {
        const myChart = new Chart(
            document.getElementById("myChart"),
            config
        )
        
        // Update total income
        myChart.config.options.scales.y.max = props.income;

        // Update income categories
        myChart.data.datasets[0].data[0] = props.salary;
        myChart.data.datasets[0].data[1] = props.investment;
        myChart.data.datasets[0].data[2] = props.other;

        myChart.update();
    }, 100);
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

    #header {
        margin: 3.5%;
        color: $light-font;
        border-bottom: 1px solid $border-color;
    }

    #chart-container {
        width: 100%;
        height: 80vh;
    }

    h2 {
        color: $dark-font;
        margin: 0 3.5%;
        margin-bottom: 1%;
    }
</style>