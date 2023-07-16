const _ = require("lodash");

const arr = [
  { name: "Expired", isAuthor: false, isActive: false, existance: "old" },
  { name: "Aakash", isAuthor: true, isActive: true },
  { name: "Astr", isAuthor: false, isActive: true, existance: "new" },
];

const result_a1 = _.dropWhile(arr, (pep) => !pep.isAuthor);
const result_a2 = _.dropWhile(arr, (pep) => !pep.isActive);

const result_b = _.dropWhile(arr, {
  name: "Expired",
  isAuthor: false,
});

const result_c1 = _.dropWhile(arr, ["isAuthor", false]);
const result_c2 = _.dropWhile(arr, ["isActive", false]);

const result_d = _.dropWhile(arr, "existance");

console.log({
  result_a1,
  result_a2,
  result_b,
  result_c1,
  result_c2,
  result_d,
});
