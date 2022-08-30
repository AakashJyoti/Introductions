const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

let unionArr = [...new Set([...arr1, ...arr2])];

// console.log(unionArr.sort().reverse());

const u2 = [];
const merge = [...arr1, ...arr2];

// console.log(merge);

var object = {};

for (var i = arr1.length - 1; i >= 0; --i) object[arr1[i]] = arr1[i];
for (var i = arr2.length - 1; i >= 0; --i) object[arr2[i]] = arr2[i];

for (var i in object) {
  if (object.hasOwnProperty(i)) u2.push(object[i]);
}

console.log(u2);
