// Palindrome Number = Number reads same forward and backward

// const isPalindrome = function (x) {
//   return x === +x.toString().split("").reverse().join("");
// };

const isPalindrome = function (x) {
  if (x < 0) return false;
  let reverse = parseInt(x.toString().split("").reverse().join(""));
  if (reverse === x) return true;
  return false;
};

console.log(isPalindrome(121));
