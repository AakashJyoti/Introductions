const _ = require("lodash");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = _.remove(arr, (e) => e % 2 === 0);

console.log(arr);
console.log(result);
