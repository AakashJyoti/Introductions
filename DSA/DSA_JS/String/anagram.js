const checkAnagram = (str1, str2) => {
  let ObjStr1 = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (const ch of str1) {
    ObjStr1[ch] = (ObjStr1[ch] || 0) + 1;
  }
  for (const ch of str2) {
    if (!ObjStr1[ch]) {
      return false;
    }
    ObjStr1[ch]--;
  }
  return true;
};

console.log(checkAnagram("hello", "ollhe"));
