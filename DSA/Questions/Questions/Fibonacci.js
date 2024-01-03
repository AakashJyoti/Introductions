// Fibonacci Numbers
// Ex: 0,1,1,2,3,5,8,13,21,34,55,89...

// F(0) = 0, F(1) = 1;
// F(n) = F(n-1) + F(n-2), for n > 1

const fib = (n) => {
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
};

const recFib = (n) => {
  if (n <= 1) return n;
  return recFib(n - 1) + recFib(n - 2);
};

console.log(recFib(5));

// console.log(fib(5));
