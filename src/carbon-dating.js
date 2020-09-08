const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const activity = parseFloat(sampleActivity);
  if (sampleActivity && typeof sampleActivity === "string" && activity && activity > 0 &&
      activity < MODERN_ACTIVITY ) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / activity) / (0.693/HALF_LIFE_PERIOD));
  }
  else return false;
};
