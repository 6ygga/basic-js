const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  direction = true;
  alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  regexp = /[a-zA-Z]/;

  constructor(param){
    this.direction = (!param ? false : true);
  }
  encrypt(message, key) {
    let keystring = key;
    while (keystring.length < message.length) {keystring += key;}
    keystring = keystring.slice(0, message.length);
    const messageArr = message.split('').
      reduce((res, item, index) => {
      return (this.regexp.test(item)) ?
          res.concat(this.letterArr(keystring[index])[this.alphabet.indexOf(item.toUpperCase())]) :
          res.concat(item);
    }, []);
    const encrypted = messageArr.join();

    return encrypted;
  }
  decrypt(encryptedMessage, key) {
  return encryptedMessage;
  }

  letterArr(letter) {
    const a = this.alphabet.filter(item => item >= letter.toUpperCase());
    const b= this.alphabet.filter(item => item < letter.toUpperCase());
    const ab = [].concat(a, b);
    return ab;
  }
}

module.exports = VigenereCipheringMachine;
