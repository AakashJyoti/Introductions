const arr = [4, 8, 10, 9, 5, 2, 2, 2, 2];

const newArray = [...new Set(arr)];
console.log(newArray);

var unique1 = [];
function remDub(arr) {
  arr.forEach((element) => {
    if (!unique1.includes(element)) {
      unique1.push(element);
    }
  });
}
remDub(arr);
console.log(unique1);

function remDub2(arr) {
  var unique2 = arr.reduce(function (acc, curr) {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return unique2;
}
console.log(remDub2(arr));
