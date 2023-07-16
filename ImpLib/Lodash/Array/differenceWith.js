const _ = require("lodash");

const arr = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 2, y: 2 },
];

const compArr = [
  { x: 1, y: 1 },
  { x: 2, y: 2 },
];

const result = _.differenceWith(arr, compArr, _.isEqual);
console.log(result);
