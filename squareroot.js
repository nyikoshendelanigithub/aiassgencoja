
function calculateSquareRoot(number) {
    try {
      if (number < 0) {
        throw new Error("The input cannot be a negative number");
      }
      return Math.sqrt(number);
    } catch (error) {
      console.log(error.message);
    }
  }



  console.log(calculateSquareRoot(16));
  console.log(calculateSquareRoot(121));