let data = new Map([
  ["name", "Aakash"],
  [true, "male"],
]);

data.set("pen", "paper");

console.log(data.size);
console.log(data.has("pen"));
console.log(data.get("pen"));
// data.clear();
// console.log(data);

for (const x of data) {
  console.log(x);
  console.log(x[0]);
  console.log(x[1]);
}
