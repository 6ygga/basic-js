const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arra = [];
  let res = [];
  arra = arr.concat(arra);
  if (arr.length === 0 || arr[0] === undefined) return [];
  let done = false;
  let index = 0;
  while (!done) {
    switch (arra[index]) {
      case '--discard-next':
        if (index === arra.length-1) {done = true; break; }
        if (equal(arra[index+1])) {break;}
        arra.splice(index+1,1); break;
      case '--discard-prev':
        if (index === 0) {break; }
        if (equal(arra[index - 1])) {break;}
        res.pop(); break;
      case '--double-next':
        if (index === arra.length - 1) {done = true; break; }
        if (equal(arra[index+1])) {break;}
        res.push(arra[index+1]); break;
      case '--double-prev':
        if (index === 0) {break; }
        if (equal(arra[index-1])) {break;}
        res.push(arra[index - 1]); break;
      default: res.push(arra[index]); break;
    }
    if (++index >= arra.length) break;
  }
  return res; //.concat(arr)
};

function equal(str) {
  return str === '--discard-next' || str === '--discard-prev' || str === '--double-next' || str === '--double-prev';
}
