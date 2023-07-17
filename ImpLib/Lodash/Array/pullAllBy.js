const _ = require("lodash");

let arr = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }, { x: 4 }];
let pullArr = [{ x: 1 }, { x: 2 }];

const result = _.pullAllBy(arr, pullArr, "x");
console.log(result);
