const _ = require("lodash");

let arr = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 2, y: 2 },
];

const result = _.pullAt(arr, [1, 2]);
console.log(result);
