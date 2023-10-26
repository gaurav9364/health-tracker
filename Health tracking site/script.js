document.addEventListener("DOMContentLoaded", function () {
    // Initialize counters
    let stepCount = 0;
    let calorieCount = 0;

    // Get DOM elements
    const stepInput = document.getElementById("step-input");
    const calorieInput = document.getElementById("calorie-input");
    const stepCounter = document.getElementById("step-counter");
    const calorieCounter = document.getElementById("calorie-counter");
    const addStepsButton = document.getElementById("add-steps");
    const addCaloriesButton = document.getElementById("add-calories");
    const historyList = document.getElementById("history-list");

    // Update counters
    function updateCounters() {
        stepCounter.textContent = stepCount + " Steps";
        calorieCounter.textContent = calorieCount + " Calories";
    }

    // Add steps
    addStepsButton.addEventListener("click", function () {
        const steps = parseInt(stepInput.value);
        stepCount += steps;
        updateCounters();
        stepInput.value = "";
        addToHistory(`Added ${steps} Steps`);
    });

    // Add calories
    addCaloriesButton.addEventListener("click", function () {
        const calories = parseInt(calorieInput.value);
        calorieCount += calories;
        updateCounters();
        calorieInput.value = "";
        addToHistory(`Consumed ${calories} Calories`);
    });

    // Add to history
    function addToHistory(item) {
        const li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    }
});