const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

let unionArr = [...new Set([...arr1, ...arr2])];

console.log(unionArr.sort().reverse());
