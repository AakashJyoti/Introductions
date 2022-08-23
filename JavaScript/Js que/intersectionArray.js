// console.log("I am going to kill it");

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

// find intersection

const interArr1 = arr1.filter((currElem) => {
  return arr2.includes(currElem);
});

console.log(interArr1);

let interArr2 = [];
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] == arr2[j]) {
      interArr2.push(arr1[i]);
    }
  }
}
console.log(interArr2);

let interArr3 = [];
for (const val1 of arr1) {
  for (const val2 of arr2) {
    if (val1 == val2) {
      interArr3.push(val1);
    }
  }
}
console.log(interArr3);
