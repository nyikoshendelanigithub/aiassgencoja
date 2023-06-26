
function checkEligibility() {
    var age = parseInt(document.getElementById("age").value);
    var membership = document.getElementById("membership").checked;
    var resultElement = document.getElementById("result");
  
    if (age >= 65) {
      resultElement.textContent = "Congratulations! You are eligible for the Senior Discount.";
    } else if (age >= 18 && membership) {
      resultElement.textContent = "Congratulations! You are eligible for the Member Discount.";
    } else {
      resultElement.textContent = "Sorry, you are not eligible for any discounts.";
    }
  }
  