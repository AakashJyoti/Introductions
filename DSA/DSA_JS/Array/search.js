const data = [10, 20, 30, 40, 50];
const searchEl = 40;

console.log("Using For Loop");
for (let index = 0; index < data.length; index++) {
  if (data[index] == searchEl) {
    console.log("Available at index", index);
  }
}

console.log("Using Indexof");
const loc = data.indexOf(searchEl);
console.log(loc);
