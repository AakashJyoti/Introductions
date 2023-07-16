const _ = require("lodash");

const arr_a = ["a", "b", "c", "d"];
const compArr = ["b", "c"];
const differencaed = _.difference(arr_a, compArr);
console.log(differencaed);
