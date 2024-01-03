let data = [];
let currentSize = data.length;
let max = 5;

const push = (newVal) => {
  if (max <= currentSize) return;
  data[currentSize] = newVal;
  currentSize++;
};

const pop = () => {
  if (currentSize <= 0) return;
  currentSize--;
  data.length = currentSize;
};

push(40);
push(10);
push(20);
push(30);
push(50);
push(50);

pop();
pop();
pop();
pop();
pop();

console.log(data);
