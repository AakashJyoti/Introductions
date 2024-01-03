// Implement custom for-each Functions

Array.prototype.customForEachOne = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.customForEachTwo = function (callback, thisContext) {
  if (typeof callback !== "function") {
    throw "Not a function";
  }

  const length = this.length;

  let i = 0;

  while (i < length) {
    if (this.hasOwnProperty) {
      callback.call(thisContext, this[i], i, this);
    }
    i++;
  }
};

let newArr = [1, 2, 3, 4, 5];

newArr.customForEachOne((e, i, arr) => {
  console.log({ e, i, arr });
});

newArr.customForEachTwo((e) => {
  console.log(e);
});
