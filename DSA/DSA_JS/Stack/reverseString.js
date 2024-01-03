let stack = [];
let currentSize = stack.length;
let max = 20;

const push = (newValue) => {
  if (max <= currentSize) return;
  stack[currentSize] = newValue;
  currentSize++;
};

const pop = () => {
  if (currentSize < 0) return;
  const lastVal = stack[currentSize - 1];
  currentSize--;
  stack.length = currentSize;
  return lastVal;
};

let str = "Aakash";
str = str.split("");

const reverseStr = (item) => {
  for (let i = 0; i < item.length; i++) {
    push(item[i]);
  }
  for (let i = 0; i < item.length; i++) {
    item[i] = pop();
  }
};

reverseStr(str);
str = str.join("");
console.log(str);
