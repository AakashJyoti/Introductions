const checkPalindrome = (str) => {
  let start = 0;
  let end = str.length - 1;
  while (end > start) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(checkPalindrome("LeveL"));
