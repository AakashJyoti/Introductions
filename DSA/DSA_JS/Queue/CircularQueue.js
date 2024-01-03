class Queue {
  constructor(size) {
    this.max = size;
    this.items = new Array(size);
    this.currentSize = 0;
    this.rear = -1;
    this.front = -1;
  }

  enqueue(val) {
    if (this.currentSize !== this.max) {
      if (this.rear == this.max - 1) {
        this.rear = 0;
      } else {
        this.rear++;
      }
      this.items[this.rear] = val;
      this.currentSize++;
      if (this.front == -1) {
        this.front = this.rear;
      }
    } else {
      console.log("Queue is full");
    }
  }

  dequeue() {
    if (this.currentSize == 0) {
      console.log("Queue is Empty");
      this.front = -1;
      this.rear = -1;
    } else {
      this.items[this.front] = null;
      if (this.front == this.max - 1) {
        this.front = 0;
      } else {
        this.front++;
      }
      this.currentSize--;
    }
  }
}

let queue1 = new Queue(5);
queue1.enqueue(10);
queue1.enqueue(20);
queue1.dequeue();
queue1.enqueue(30);
queue1.enqueue(40);
queue1.enqueue(50);
queue1.enqueue(100);
queue1.dequeue();
queue1.enqueue(150);
console.log(queue1);
