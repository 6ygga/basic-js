const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const additionStr = (options.addition || options.addition === false || options.addition === null) ? String(options.addition) : '';
  const string = String(str);
  let resStr = '';
  let addy = '';
  for (let k = 0; k <= (options.repeatTimes - 1) && string; k++) {
    addy = additionStr ? additionStr : '';
    for (let i = 1; i <= (options.additionRepeatTimes -1) && addy; i++) {
      addy += (options.additionSeparator? options.additionSeparator : '|') + (additionStr ? additionStr : '');
    }
    resStr += string + addy + ((k <= options.repeatTimes -2) ? (options.separator ? options.separator : '+') : '');
    addy = '';
  }
  return (!resStr && string) ? (string + (additionStr ? additionStr : '')) : resStr;
};
