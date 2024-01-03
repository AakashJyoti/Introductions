let position = 3;

console.log("Using For Loop");
let data = [10, 20, 30, 40, 50];
for (let i = position; i <= data.length - 1; i++) {
  data[i] = data[i + 1];
}
data.length = data.length - 1;
console.log(data);

console.log("Using For Loop");
let data2 = [10, 20, 30, 40, 50];
let i = position - 1;
while (i <= data2.length - 1) {
  data2[i] = data2[i + 1];
  i++;
}
data2.length = data2.length - 1;
console.log(data2);

console.log("Using Splice");
let data3 = [10, 20, 30, 40, 50];
data3.splice(position, 1);
console.log(data3);
