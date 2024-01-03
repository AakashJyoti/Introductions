let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let i = 0;
let flag = true;

const findVal = (find) => {
  while (i <= arr.length) {
    if (arr[i] === find) {
      console.log(`Value present in ${i} index`);
      flag = false;
      break;
    }
    i++;
  }
  flag && console.log("Not present in Arr");
};

findVal(60);
