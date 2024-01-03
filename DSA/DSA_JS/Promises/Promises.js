const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) resolve("Task1");
    reject(new Error("Error1"));
  }, 100);
});

sub.then((result) => console.log(result)).catch((error) => console.log(error));

function impSolve(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(username);
    }, 1000);
  });
}

function like(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(video);
    }, 1000);
  });
}

// --- Promises Hell
impSolve("YO 1")
  .then((result) => {
    console.log(result);
    like("Pizza 1").then((result) => {
      console.log(result);
    });
  })
  .catch((error) => console.log(error));

// --- Promises Ladder
impSolve("YO 2")
  .then((result) => {
    console.log(result);
    return like("Pizza 2");
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

// --- Promises Combinator --
// - Promises.all :- return with fulfilled promises but fails even one promise fail
Promise.all([impSolve("YO 2"), like("Pizza 2")])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// - Promises.race :- returns first fulfilled promises
Promise.race([impSolve("YO 2"), like("Pizza 2")])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// - Promises.allSettled :- returns array object with status and value
Promise.allSettled([impSolve("YO 2"), like("Pizza 2")])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// - Promises.any :- returns first fulfilled promises ignore rejected one
Promise.any([impSolve("YO 2"), like("Pizza 2")])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
