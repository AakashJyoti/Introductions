let data = {
  id: 1,
  name: "Aakash",
  age: 25,
  email: "akjyoti572@gmail.com",
  getName: function () {
    return this.name;
  },
};

data.contact = 239873847328;
// delete data.name;
data.name = "Astr";
console.log(data);

for (const x in data) {
  console.log(x, "=", data[x]);
}

console.log(Object.keys(data));
console.log(Object.values(data));
console.log(Object.entries(data));
console.log(Object.entries(data).flat());
