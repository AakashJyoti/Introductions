const insertionSort = (arr) => {
  let j, temp;
  for (let i = 0; i < arr.length; i++) {
    temp = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
};

let data = [30, 40, 10, 50, 80, 20, 90, 60, 70];
insertionSort(data);
console.log(data);
