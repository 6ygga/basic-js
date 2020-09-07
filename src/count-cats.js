const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
 return matrix.reduce( (cats, item) => cats += item.reduce((res, cell) => (res + (cell === '^^' ? 1 : 0)), 0),0);
};
