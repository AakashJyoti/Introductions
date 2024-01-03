let queue = [];
let currentSize = queue.length;
let maxSize = 5;

const isEmpty = () => {
  if (currentSize <= 0) {
    return true;
  } else {
    return false;
  }
};

const enqueue = (val) => {
  if (currentSize >= maxSize) return;
  queue[currentSize] = val;
  currentSize++;
};

const dequeue = () => {
  if (isEmpty()) return "Empty Queue";
  let val = queue[0];
  for (let i = 0; i < queue.length; i++) {
    queue[i] = queue[i + 1];
  }
  currentSize--;
  queue.length = currentSize;
  return val;
};

const display = () => console.log(queue);

const front = () => {
  if (isEmpty()) return "Empty Queue";
  return queue[0];
};

const rear = () => {
  if (isEmpty()) return "Empty Queue";
  return queue[currentSize - 1];
};

enqueue(10);
enqueue(20);
enqueue(30);
console.log(dequeue());
console.log(dequeue());
console.log(front());
console.log(rear());
display();
