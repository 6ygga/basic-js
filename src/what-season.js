const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date || typeof date !== 'object') {
        return 'Unable to determine the time of year!';
    }
    const milisec = date.getTime();
    const testDate = new Date(milisec);
    const month = ([0,1,2,3,4,5,6,7,8,9,10,11]).indexOf(date.getMonth());
    if (testDate.getMonth() !== date.getMonth() ||
        testDate.getFullYear() !== date.getFullYear() ||
        testDate.getDay() !== date.getDay()) {return 'THROWN';}
    if ( month<=11 && month >= 0) {
        switch (month) {
            case 0:
            case 1:
            case 11:
                return 'winter';
            case 2:
            case 3:
            case 4:
                return 'spring';
            case 5:
            case 6:
            case 7:
                return 'summer';
            case 8:
            case 9:
            case 10:
                return 'fall';
        }
    }
    else return 'THROWN';
};
