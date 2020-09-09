const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let resObj = {};
  resObj.turns = 2**disksNumber -1;
  const sec = 3600 / turnsSpeed * resObj.turns;
  resObj.seconds = Math.trunc(sec);
  return resObj;
};
