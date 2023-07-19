const _ = require("lodash");

const arr = [1, 2, 3, 4, 5, 5, 5, 5, 6];
const result = _.sortedUniq(arr);

console.log(result);
