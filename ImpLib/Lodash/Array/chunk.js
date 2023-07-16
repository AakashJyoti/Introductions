const _ = require("lodash");

const arr = ["a", "b", "c", "d", "e"];
const chunked = _.chunk(arr, 2);
chunked.map((val) => console.log(val));
