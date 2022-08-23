const arr = [4, 8, 10, 9, 5];

let revArr = [];
for (const val of arr) {
  revArr.unshift(val);
}
console.log(revArr);
