const _ = require("lodash");

const arr = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }];
const elementTosort = { x: 3 };

const result = _.sortedIndexBy(arr, elementTosort, "x");

console.log(result);
