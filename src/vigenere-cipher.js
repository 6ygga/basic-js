const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  direction = true;
  alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  regexp = /[a-zA-Z]/;

  constructor(param){
    this.direction = ((!param && param != undefined) ? false : true);
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error();
    let index = 0;
    let keystring = key;
    while (keystring.length < message.length) {keystring += key;}
    keystring = keystring.slice(0, message.length);
    const resStr = message.split('').reduce((res, item) => {
      return (this.regexp.test(item)) ?
          res.concat(this.letterArr(keystring[index++])[this.alphabet.indexOf(item.toUpperCase())]) :
          res.concat(item);
    }, []).join('');
    return this.direction ? resStr : resStr.split('').reverse().join('');

  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error();
    let index = 0;
    let keystring = key;
    while (keystring.length < encryptedMessage.length) {keystring += key;}
    keystring = keystring.slice(0, encryptedMessage.length);
    const resStr = encryptedMessage.split('').reduce((res, item) => {
      return (this.regexp.test(item)) ?
          res.concat(this.alphabet[this.letterArr(keystring[index++]).indexOf(item.toUpperCase())]) :
          res.concat(item);
    }, []).join('');
    return this.direction ? resStr : resStr.split('').reverse().join('');
  }

  letterArr(letter) {
    const a = this.alphabet.filter(item => item >= letter.toUpperCase());
    const b= this.alphabet.filter(item => item < letter.toUpperCase());
    const ab = [].concat(a, b);
    return ab;
  }
}

module.exports = VigenereCipheringMachine;
