const maxOccur = (str) => {
  let obj = {};
  let maxKey = "";
  for (let i = 0; i < str.length; i++) {
    let key = str[i];
    if (!obj[key]) {
      obj[key] = 0;
    }
    obj[key]++;
    if (maxKey == "" || obj[key] > obj[maxKey]) {
      maxKey = key;
    }
  }
  return maxKey;
};

console.log(maxOccur("aakash"));
