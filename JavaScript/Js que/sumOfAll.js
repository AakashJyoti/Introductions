const arr = [2, 3, 4, 5, 6];

const result = arr.reduce((acc, curr) => {
  return acc + curr;
});

console.log(result);

let sum = 0;
for (const n of arr) {
  sum += n;
}

console.log(sum);
