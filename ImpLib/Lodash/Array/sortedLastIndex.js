const _ = require("lodash");

const arr = [1, 2, 3, 4, 4, 4, 4, 5];
const result = _.sortedLastIndex(arr, 4);

console.log(result);
