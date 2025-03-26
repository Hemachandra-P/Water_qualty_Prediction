document.getElementById("predict").addEventListener("click", function () {
    let pH = document.getElementById("pH").value;
    let doLevel = document.getElementById("do").value;
    let bod = document.getElementById("bod").value;
    let turbidity = document.getElementById("turbidity").value;

    if (pH === "" || doLevel === "" || bod === "" || turbidity === "") {
        alert("⚠️ Please fill in all fields!");
        return;
    }

    // Simulated Model Predictions (Replace with actual API calls)
    let model1Prediction = Math.random() < 0.5 ? "Safe 🌿" : "Unsafe ⚠️";
    let model2Prediction = Math.random() < 0.5 ? "Safe 🌿" : "Unsafe ⚠️";
    let model3Prediction = Math.random() < 0.5 ? "Safe 🌿" : "Unsafe ⚠️";

    // Simulated Accuracy Scores (Replace with actual values)
    let model1Accuracy = (Math.random() * (98 - 90) + 90).toFixed(2); // 90% - 98%
    let model2Accuracy = (Math.random() * (95 - 85) + 85).toFixed(2); // 85% - 95%
    let model3Accuracy = (Math.random() * (92 - 88) + 88).toFixed(2); // 88% - 92%

    // Displaying Predictions with Accuracy Scores
    document.getElementById("predictionResult").innerHTML = `
        <b>Linear Regression:</b> ${model1Prediction} (Accuracy: ${model1Accuracy}%) <br>
        <b>Random Forest Regression:</b> ${model2Prediction} (Accuracy: ${model2Accuracy}%) <br>
        <b>Support Vector Regression:</b> ${model3Prediction} (Accuracy: ${model3Accuracy}%)
    `;
});

// **Fixing View Dataset Button**
document.getElementById("viewDataset").addEventListener("click", function () {
    let datasetTable = document.getElementById("datasetTable");
    
    // Toggle dataset visibility
    if (datasetTable.classList.contains("hidden")) {
        datasetTable.classList.remove("hidden");
        populateDataset();
    } else {
        datasetTable.classList.add("hidden");
    }
});

function populateDataset() {
    let sampleData = [
        { pH: 7.2, DO: 5.8, BOD: 3.5, Turbidity: 2.1 },
        { pH: 6.9, DO: 6.1, BOD: 2.8, Turbidity: 3.0 },
        { pH: 7.5, DO: 5.5, BOD: 3.2, Turbidity: 1.8 }
    ];

    let tbody = document.querySelector("#datasetTable tbody");
    tbody.innerHTML = ""; // Clear previous data

    sampleData.forEach(row => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${row.pH}</td><td>${row.DO}</td><td>${row.BOD}</td><td>${row.Turbidity}</td>`;
        tbody.appendChild(tr);
    });
}
