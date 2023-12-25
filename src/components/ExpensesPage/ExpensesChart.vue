<template>

    <h1 id="header">Chart</h1>
    <h2>Category expenses compared to total expenses</h2>

    <div id="chart-container">
        <canvas id="myChart"></canvas>
    </div>

</template>

<script setup>
import { onMounted } from "vue";

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
    expenses: {
        type: Number,
        required: true
    }
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
    "Hobby",
    "Taxes",
    "Repairs",
    "Housing",
    "Transportation"
];

// Chart data
const data = {
    labels: labels,
    datasets: [{
        label: "Expense",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
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
        
        // Update total expenses
        myChart.config.options.scales.y.max = props.expenses;

        // Update expense categories
        myChart.data.datasets[0].data[0] = props.hobby;
        myChart.data.datasets[0].data[1] = props.taxes;
        myChart.data.datasets[0].data[2] = props.repairs;
        myChart.data.datasets[0].data[3] = props.housing;
        myChart.data.datasets[0].data[4] = props.transportation;


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