let data = [70, 10, 20, 80, 30, 40, 90, 50, 60];

const ascendingOrder = (items) => {
  let minId;
  for (let i = 0; i < items.length; i++) {
    minId = i;
    for (let j = i; j < items.length; j++) {
      if (items[j] < items[minId]) {
        minId = j;
      }
    }

    let temp = items[minId];
    items[minId] = items[i];
    items[i] = temp;
  }
};

ascendingOrder(data);
console.log(data);

const descendingOrder = (items) => {
  let maxId;
  for (let i = 0; i < items.length; i++) {
    maxId = i;
    for (let j = i; j < items.length; j++) {
      if (items[maxId] < items[j]) {
        maxId = j;
      }
    }
    let temp = items[maxId];
    items[maxId] = items[i];
    items[i] = temp;
  }
};

descendingOrder(data);
console.log(data);
