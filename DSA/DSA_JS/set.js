// Array with steroids
// removes duplicate values and have different features N/A in Array

let data = new Set(["no", true, 10, true]);

data.add("he");
console.log(data.has(10));
data.add({ email: "aakash@gmail.com" });
console.log(data.size);

// data.clear();

data.delete("no");

for (const x of data) {
  console.log(x);
}

data.forEach((element) => {
  console.log(element);
});

console.log(data.values());
console.log(data.keys());
console.log(data.entries());
console.log("data", data);
