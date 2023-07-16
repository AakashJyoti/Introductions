const _ = require("lodash");

const arr = [
  { name: "Aakash", isAuthor: true, isActive: true },
  { name: "Astr", isAuthor: false, isActive: true, existance: "new" },
  { name: "Expired", isAuthor: false, isActive: false, existance: "old" },
];

const result_a = _.findIndex(arr, (pep) => pep.name === "Astr");

const result_b = _.findIndex(arr, {
  name: "Expired",
  isAuthor: false,
});

const result_c1 = _.findIndex(arr, ["isAuthor", false]);
const result_c2 = _.findIndex(arr, ["isActive", false]);

const result_d = _.findIndex(arr, "existance");

console.log({
  result_a,
  result_b,
  result_c1,
  result_c2,
  result_d,
});
