//   --- Chapter 1 ---

// Q1
// let a = "Jabba";
// let b = 5;
// console.log(a + b);

// Q2
// console.log(typeof (a + b));

// Q3
// const k = { name: "halwa", sec: "C", class: "7" };
// k = 6;
// console.log(k);
// NO

// Q4
// const k = { name: "halwa", sec: "C", class: "7" };
// k["hrkt"] = "Bawal";
// k["name"] = "Jagga";
// console.log(k);

// Q5
// const WM = {
//   five: "Panch",
//   one: "Ek",
//   pasha: "Bhai",
//   halwa: "Sahi hai",
//   chole: "Bhature",
//   Yakka: "Work Specialy hard work",
// };

// console.log(WM);
// console.log(WM.Yakka);

//   --- Chapter 2 ---

// Q 1
// let age = 40;

// if (age > 10 && age < 20) {
//   console.log("Age Lies between 10 and 30");
// } else {
//   console.log("Age doesn't Lies between 10 and 30");
// }

// Q 2
// let age = 30;
// switch (age) {
//   case 11:
//     console.log(`Youe age is important ${age}`);
//     break;

//   case 30:
//     console.log(`Youe age is important ${age}`);
//     break;

//   case 17:
//     console.log(`Youe age is important ${age}`);
//     break;

//   case 52:
//     console.log(`Youe age is important ${age}`);
//     break;

//   default:
//     console.log(`Youe age is not important`);
//     break;
// }

// Q 3 & 4
// let num = 339037392723;

// if (num % 2 == 0 && num % 3 == 0) {
//   console.log(`num is divisible by 2 and 3 and result is ${num / 6}`);
// } else if (num % 2 == 0) {
//   console.log(`num is divisible by 2 and result is ${num / 2}`);
// } else if (num % 3 == 0) {
//   console.log(`num is divisible by 3 and result is ${num / 3}`);
// } else {
//   console.log(`${num} is not divisible by 2, 3 or both 2 and 3`);
// }

// Q 5
// let age = 50927237;
// age > 18 ? console.log("You can Drive") : console.log("You Cannot Drive");

//   --- Chapter 3 ---
// Q1
// let obj = { Rohan: 45, Mohan: 30, Ravi: 55 };

// for (let i = 0; i < Object.keys(obj).length; i++) {
//   console.log(
//     "Marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]]
//   );
// }

// Q 2
// for (const stu in obj) {
//   console.log("Marks of " + stu + " are " + obj[stu]);
// }

// Q 3
// let cn = 52;
// let num;

// while (num != cn) {
//   console.log("Please enter a number");
// }

// Q 4
// function mean(a, b, c, d, e) {
//   console.log((a + b + c + d + e) / 5);
// }

// mean(1, 2, 3, 4, 5);

// const means = (a, b, c, d, e) => console.log((a + b + c + d + e) / 5);
// means(5, 6, 7, 8, 9);

// const mean = (a) => (b) => (c) => (d) => (e) => (a + b + c + e + d) / 5;
// console.log(mean(2)(3)(4)(5)(4));

//   --- Chapter 4 ---
// Q 1
// console.log('har\"'.length);

// Q 2
// const word = "Jabba";
// const sentense = "Jabba aaj nahi aya";

// console.log(sentense.includes(word));

// Q 3
// console.log(sentense.startsWith(word));
// console.log(sentense.endsWith(word));

// Q 4
// console.log(sentense.toUpperCase());

// Q 5
// let sentense = "Const of Buing a new Phone is Approx 20000";
// console.log(
//   Number.parseInt(
//     `${sentense.slice("Const of Buing a new Phone is Approx ".length)}`
//   )
// );

// String is immutable

//   --- Chapter 5 ---
// Q 1
// const num = [3, 4, 5, 6, 7, 8];
// num.push(433)
// console.log(num)

// Q 2
// for (let i = 12; i > 0; i--) {
//   num.push(i);
// }

// const num = [];
// let a = 12;
// do {
//   num.push(a);
//   a--;
// } while (a != 0);

// console.log(num);

// Q 3
// const num = [3, 3, 5, 6, 7, 4, 2, 2, 4, 4, 5, 3];
// let l = num.filter((arr) => {
//   return arr % 2 == 0;
// });

// console.log(l);

// Q 4
// const num = [3, 3, 5, 6, 7, 4, 2, 2, 4, 4, 5, 3];
// let sq = num.map((n) => n * n);
// console.log(sq);

// Q 5
// const num = [1, 2, 3, 4, 5];

// let j = num.reduce((arr, cur) => {
//   return arr + cur;
// });

// console.log(j);

//   --- Chapter 6 ---
// easy dom questions
