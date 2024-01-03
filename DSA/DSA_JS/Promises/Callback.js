//  Promises === Async code

//  --- Question --- //
function imp(username) {
  setTimeout(() => {
    return username;
  }, 0);
}

console.log(imp("MOHAN")); //Undefined

//  --- Solution --- //
function impSolve(username, cb) {
  setTimeout(() => {
    cb(username);
  }, 1000);
}

impSolve("Hey yo", (data) => console.log(data));

//  --- Error --- //
const dam = () => {
  setTimeout(() => {
    const gg = () => {
      return "Diamond";
    };
  }, 10);
  return gg();
};

console.log(dam());

// --- max size CallBack hell --- //
function impSolve(username, cb) {
  setTimeout(() => {
    cb(username);
  }, 1000);
}

function like(video, cb) {
  setTimeout(() => {
    cb(video);
  }, 100);
}

impSolve("Hey yo", (data) => {
  console.log(data);
  like("Hello", (action) => {
    console.log(action);
  });
});
