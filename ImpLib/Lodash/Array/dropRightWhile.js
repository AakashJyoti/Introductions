const _ = require("lodash");

const arr = [
  { name: "Aakash", isAuthor: true, isActive: true },
  { name: "Astr", isAuthor: false, isActive: true, existance: "new" },
  { name: "Expired", isAuthor: false, isActive: false, existance: "old" },
];

const result_a1 = _.dropRightWhile(arr, (pep) => !pep.isAuthor);
const result_a2 = _.dropRightWhile(arr, (pep) => !pep.isActive);

const result_b = _.dropRightWhile(arr, {
  name: "Expired",
  isAuthor: false,
  isActive: false,
});

const result_c1 = _.dropRightWhile(arr, ["isAuthor", false]);
const result_c2 = _.dropRightWhile(arr, ["isActive", false]);

const result_d = _.dropRightWhile(arr, "existance");

console.log({
  result_a1,
  result_a2,
  result_b,
  result_c1,
  result_c2,
  result_d,
});
