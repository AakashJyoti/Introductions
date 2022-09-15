// callback - calling a function inside an another function
// types of promisis = all, race, allSettled, any

console.log("start");

// function impAction(name, callback) {
//   setTimeout(() => {
//     callback(`Hello ${name}`);
//   }, 100);
// }

// function completeCode(work, callback) {
//   setTimeout(() => {
//     callback(`complete ${work}`);
//   }, 100);
// }

// function completeAssignment(assignment, callback) {
//   setTimeout(() => {
//     callback(`complete ${assignment}`);
//   }, 100);
// }

// impAction("Jabba", function (message) {
//   console.log(message);
//   completeCode("next.js conversion", function (work) {
//     console.log(work);
//     completeAssignment("Mern Dev", function (assignment) {
//       console.log(assignment);
//     });
//   });
// });

// //  --- Async Function With Promisses ---

// const val = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = true;
//     if (result) resolve("Work Complted");
//     else reject("Query raise");
//   }, 100);
// });

// val
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// console.log(val);

// // -- Promisis one liner
// const sub = Promise.resolve("Hello there");
// console.log(sub);
// sub.then((res) => console.log(res));

// // --- Previous Function impementation with Promisis ---

// function impAction(name) {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       resolve(`Hello ${name} 1`);
//     }, 100);
//   });
// }

// function completeCode(work) {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       resolve(`complete ${work} 2`);
//     }, 100);
//   });
// }

// function completeAssignment(assignment) {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       resolve(`complete ${assignment} 3`);
//     }, 100);
//   });
// }

// impAction("Jabba")
//   .then((res) => {
//     console.log(res);
//     completeCode("Next").then((res) => {
//       console.log(res);
//       completeAssignment("Pagination").then((res) => {
//         console.log(res);
//       });
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // --- Promisis Chaning ---

// function impAction(name) {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       resolve(`Hello ${name} 1`);
//     }, 100);
//   });
// }

// function completeCode(work) {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       resolve(`complete ${work} 2`);
//     }, 100);
//   });
// }

// function completeAssignment(assignment) {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       resolve(`complete ${assignment} 3`);
//     }, 100);
//   });
// }

// impAction("Jabba")
//   .then((res) => {
//     console.log(res);
//     return completeCode("Next");
//   })
//   .then((res) => {
//     console.log(res);
//     return completeAssignment("Pagination");
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//// --- Promisis Combinator ---

// // --- Promisis All ---

// function impAction(name) {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       resolve(`Hello ${name} 1`);
//     }, 1000);
//   });
// }

// function completeCode(work) {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       resolve(`complete ${work} 2`);
//     }, 100);
//   });
// }

// function completeAssignment(assignment) {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       resolve(`complete ${assignment} 3`);
//     }, 500);
//   });
// }

// if one promisis fails then all promisis fail

// Promise.all([
//   impAction("Jabba"),
//   completeCode("Next"),
//   completeAssignment("Pagination"),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//// --- Promisis Race ---

// function impAction(name) {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       resolve(`Hello ${name} 1`);
//     }, 1000);
//   });
// }

// function completeCode(work) {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       resolve(`complete ${work} 2`);
//     }, 100);
//   });
// }

// function completeAssignment(assignment) {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       resolve(`complete ${assignment} 3`);
//     }, 500);
//   });
// }

// Promise.race([
//   impAction("Jabba"),
//   completeCode("Next"),
//   completeAssignment("Pagination"),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//// --- Promisis All Seteled ---

// function impAction(name) {
//     return new Promise((resolve, rejects) => {
//       setTimeout(() => {
//         resolve(`Hello ${name} 1`);
//       }, 1000);
//     });
//   }

//   function completeCode(work) {
//     return new Promise((resolve, rejects) => {
//       setTimeout(() => {
//         rejects(`complete ${work} 2`);
//       }, 100);
//     });
//   }

//   function completeAssignment(assignment) {
//     return new Promise((resolve, rejects) => {
//       setTimeout(() => {
//         resolve(`complete ${assignment} 3`);
//       }, 500);
//     });
//   }

//   Promise.allSettled([
//     impAction("Jabba"),
//     completeCode("Next"),
//     completeAssignment("Pagination"),
//   ])
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//// --- Promisis Any ---
//  Ignore rejected Promisis
// give error only when all promisis fails

// function impAction(name) {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       resolve(`Hello ${name} 1`);
//     }, 1000);
//   });
// }

// function completeCode(work) {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       rejects(`complete ${work} 2`);
//     }, 100);
//   });
// }

// function completeAssignment(assignment) {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       resolve(`complete ${assignment} 3`);
//     }, 500);
//   });
// }

// Promise.any([
//   impAction("Jabba"),
//   completeCode("Next"),
//   completeAssignment("Pagination"),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });



console.log("end");
