class Stack {
  item = [];
  currentSize;
  maxSize;
  constructor(size) {
    this.maxSize = size;
    this.currentSize = this.item.length;
  }

  push(newVal) {
    if (this.maxSize <= this.currentSize) return;
    this.item[this.currentSize] = newVal;
    this.currentSize++;
  }

  pop() {
    if (this.currentSize < 0) return;
    let val = this.item[this.currentSize - 1];
    this.currentSize--;
    this.item.pop();
    return val;
  }

  display() {
    console.log(this.item);
    return this.item;
  }
}

st2 = new Stack(10);
let str = "Astr";

const reverseStr = (item) => {
  item = item.split("");
  for (let i = 0; i < item.length; i++) {
    st2.push(item[i]);
  }
  for (let i = 0; i < item.length; i++) {
    item[i] = st2.pop();
  }
  item = item.join("");
  return item;
};

console.log(reverseStr(str));
