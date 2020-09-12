const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  count = 0;
  max = 0;
  calculateDepth(arr) {
    if (this.count === 0) this.max = 0;
    this.max = (++this.count > this.max) ? this.count : this.max;
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        this.calculateDepth(item);
      }
    });
    this.count--;
    return this.max;
  }
};
