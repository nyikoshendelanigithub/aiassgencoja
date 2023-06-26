// Range
const startRange = 1;
const endRange = 100;

// Function to check for prime number(s)
function isPrimeNumber(num) {
  if (num < 2) {
    return false;
  }
  
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

// End result for searching and proving prime numbers
for (var i = startRange; i <= endRange; i++) {
  if (isPrimeNumber(i)) {
    console.log(i);
  }
}
