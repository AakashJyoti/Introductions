// Direct recursion
const factorial = (val) => {
  if (val == 0) {
    return 1;
  }
  return val * factorial(val - 1);
};

console.log(factorial(6));

// Indirect recursion
let money = 100;
let apple = 0;
const appleCost = 10;

const buyApple = (x) => {
  if (x >= appleCost) {
    buyMore(x);
  } else {
    console.log("Need more money");
  }
};

const buyMore = (x) => {
  apple++;
  buyApple(x - appleCost);
};

buyApple(money);
console.log(apple);

// Head recursion
const head = (x) => {
  console.log(x);
  if (x > 0) {
    head(x - 1);
  }
};

head(5);

// Tail recursion
const tail = (x) => {
  if (x > 0) {
    tail(x - 1);
  }
  console.log(x);
};

tail(5);

// Array reverse
const data = [10, 20, 30, 40, 50];
const reverse = (data, start, end) => {
  const temp = data[start];
  data[start] = data[end];
  data[end] = temp;
  if (start <= end) {
    reverse(data, start + 1, end - 1);
  }
};

reverse(data, 0, data.length - 1);
console.log(data);
