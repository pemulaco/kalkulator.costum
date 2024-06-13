document.addEventListener("DOMContentLoaded", function() {
    const calculatorForm = document.getElementById("calculatorForm");
    const resultElement = document.getElementById("result");
    calculatorForm.addEventListener("submit", function(event) {
        event.preventDefault();


        const input1 = parseFloat(document.getElementById("input1").value);
        const input2 = parseFloat(document.getElementById("input2").value);
        const operator = document.getElementById("operator").value;
        resultElement.textContent = "Lopiu ❤️";
    });
});