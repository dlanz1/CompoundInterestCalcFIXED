const principalInput = document.querySelector("#Principal");
const interestInput = document.querySelector("#Interest");
const compoundInput = document.querySelector("#Compounded");
const yearInput = document.querySelector("#Years");
const resultOutput = document.querySelector("#Result");
const calculateButton = document.querySelector("#calculateButton");
const yearValue = document.querySelector("#YearsValue");

calculateButton.addEventListener("click", report);

yearInput.addEventListener("input", () => {
  yearValue.textContent = yearInput.value;
});

function report() {
  const principal = parseFloat(principalInput.value);
  const interest = parseFloat(interestInput.value) / 100; // Interest as a decimal
  const compound = parseFloat(compoundInput.value);
  const year = parseFloat(yearInput.value);

  if (isNaN(principal) || isNaN(interest) || isNaN(compound) || isNaN(year)) {
    resultOutput.textContent = "Please enter valid numbers!";
    return;
  }

  const result = principal * Math.pow(1 + interest / compound, compound * year);
  resultOutput.textContent = `Final Amount: ${result.toFixed(2)}`;
}
