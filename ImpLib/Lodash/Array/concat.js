const _ = require("lodash");

const arr = ["a"];
const concated = _.concat(arr, "b", ["c"], [["d"]]);
console.log(concated);
