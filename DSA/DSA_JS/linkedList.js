// Head , Tail , Node , Value, Next
// Node = object => {value: 100, Next : #9090}

class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }

  addNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  traverse() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size) {
      console.log(currentNode);
      currentNode = currentNode.next;
      counter++;
    }
  }

  deleteNode(index) {
    let counter = 1;
    let leadNode = this.head;
    if (index == 1) {
      this.head = this.head.next;
    } else {
      while (counter < index - 1) {
        leadNode = leadNode.next;
        counter++;
      }
      let nxtNode = leadNode.next.next;
      leadNode.next = nxtNode;
      // console.log(leadNode);
    }
    this.size--;
  }

  insertNode(index, data) {
    let counter = 1;
    let currentNode = this.head;
    while (counter > index) {
      currentNode = currentNode.next;
      counter++;
    }
    let nextNode = currentNode.next;
    currentNode.next = {
      value: data,
      next: nextNode,
    };
    this.size++;
  }

  searchNode(value) {
    let result = undefined;
    let leadNode = this.head;
    let loop = true;
    while (loop) {
      leadNode = leadNode.next;
      loop = !!leadNode;
      if (loop && leadNode.value == value) {
        loop = false;
        result = leadNode;
      }
    }
    return result;
  }
}

let app = new List(100);
app.addNode(200);
app.addNode(300);
app.addNode(400);
app.addNode(500);
app.insertNode(2, 4000);
app.insertNode(4, 4000);
// app.traverse();
// app.deleteNode(3);
let res = app.searchNode(4000);
console.log(res);
console.log(app);
