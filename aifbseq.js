function generateFibonacci(n) {
    var fibonacci = [0, 1];
    for (var i = 2; i < n; i++) {
      var nextNumber = fibonacci[i - 1] + fibonacci[i - 2];
      fibonacci.push(nextNumber);
    }
    return fibonacci;
}
// Define the number of Fibonacci numbers to generate
  var n = 10;
  var result = generateFibonacci(n);
  console.log(result);