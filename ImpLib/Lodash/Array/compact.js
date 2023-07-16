const _ = require("lodash");

const arr = ["a", 0, "b", "", "c", false, "d"];
const compacked = _.compact(arr);
console.log(compacked);
