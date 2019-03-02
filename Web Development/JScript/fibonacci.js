function fibonacciGenerator(n) {
  var arr = [1,1];
    for (var i = 2; i < n; i++) {
        arr[i] =arr[i-1] + arr[i-2];
    }
    return arr;
}

console.log(fibonacciGenerator(10));
