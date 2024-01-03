function PromisePolyfill(executor) {
  let onResolve,
    onReject,
    isFullField = false,
    isRejected = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFullField = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;
    if (isFullField && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const examplePromise = new PromisePolyfill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

examplePromise
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
