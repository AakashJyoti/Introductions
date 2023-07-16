const _ = require("lodash");

const arr_a = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 2, y: 2 },
];
const arr_b = [
  { x: 1, y: 1 },
  { x: 2, y: 2 },
];

const result = _.intersectionWith(arr_a, arr_b, _.isEqual);

console.log(result);
