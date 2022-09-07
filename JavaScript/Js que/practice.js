console.log("paractice");

function sum(a, b) {
  if (b) {
    return a + b;
  } else {
    return function (b) {
      return a + b;
    };
  }
}

// console.log(sum(2, 3));
// console.log(sum(2)(3));

let a = {
  name: "ram",
  class: { div: 7, sec: "B" },
  physical: { height: 5, weight: 60 },
};

let b = { ...a };
let c = JSON.parse(JSON.stringify(a));

b.name = "rahul";
b.class.div = 3;
c.name = "mohan";
c.physical.weight = 55;

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(Date.now());
// console.log((new Date()).getDay());
// console.log((new Date()).getHours());
// console.log((new Date()).getMinutes());
// console.log((new Date()).getSeconds());
// console.log((new Date()).toString());
// console.log((new Date()).toDateString());
// console.log((new Date()).toTimeString());
// console.log((new Date()).toISOString());

// const some = (num) => {
//   if (num < 13) {
//     console.log(13 - num);
//   } else {
//     console.log((num - 13) * 2);
//   }
// };

// some(17);

// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference
const some = (num) => {
  if (num < 13) {
    return 13 - num;
  } else {
    return (num - 13) * 2;
  }
};

// console.log(some(17));

// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

const jonny = (a, b) => {
  if (a == b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
};

// console.log(jonny(3, 3));

// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50

const jq = (a, b) => {
  if (a == 50 || b == 5) {
    return true;
  } else if (a + b == 50) {
    return true;
  } else {
    return false;
  }
};

// console.log(jq(3, 20));

//  Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

const addPy = (str) => {
  return "Py" + str;
};

// console.log(addPy("thon"));

// Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.

const remVal = (str, num) => {
  const p1 = str.substring(0, num);
  const p2 = str.substring(num + 1, str.length);
  return p1 + p2;
};

// console.log(remVal("jabba", 3));

// Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.

const stringCheck = (str) => {
  if (str.length < 4) {
    return str.toLowerCase();
  } else {
    return str.toUpperCase();
  }
};

// console.log(stringCheck("Yo"));

// Write a JavaScript program to reverse a given string.

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

// console.log(reverseString("bayan"));

// object to array

const val = { name: "Aakash", age: 24, education: "Web dev" };

// console.log(Object.keys(val));
// console.log(Object.values(val));
// console.log(Object.entries(val));

// array to object

const ja = ["a", "b", "c", " d", "e"];
const ho = { ...ja };

// console.log(ho)

const h = ["a", "b", "c"].reduce((a, v) => ({ ...a, [v]: v }), {});
// console.log(h);

function toObject(arr) {
  var rv = {};
  for (var i = 0; i < arr.length; ++i) {
    rv[ja[i]] = arr[i];
  }
  return rv;
}

console.log(toObject(["a", "b", "c", "hi", "he"]));

