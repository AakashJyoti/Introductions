const _ = require("lodash");

const arr = [1.2, 3.2, 4.2, 5.2, 5.3, 6.2];
const result = _.sortedUniqBy(arr);

console.log(result);
