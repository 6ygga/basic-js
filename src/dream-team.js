const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!members || typeof members !== 'object' || !members.length) {return false;}
    const result = members.
      reduce((stringMembers, item) => {
          if (item && typeof item === 'string') {
          return stringMembers.concat(item.trim().toUpperCase());
          }
          else return stringMembers;
       }, []).
      sort().
      reduce((res, item) => {
        return res += item[0]
      },'');
    if (result) {
      return result;
    }
    else return false;
};
