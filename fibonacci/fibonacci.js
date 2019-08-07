const fibonacci = function(num) {
  if (num < 0){
    return "OOPS";
  } else if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

module.exports = fibonacci
