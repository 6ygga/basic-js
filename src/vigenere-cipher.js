const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  direction = true;
  alphabet = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
  constructor(param){
    this.direction = (!param ? false : true);
  }
  encrypt(message, key) {
    let keystring = key;
    while (keystring.length < message.length) {keystring += key;}
    keystring = keystring.slice(0, message.length);
    return message.split('').reduce((res, item) => {
      return res += letterArr(item)[this.alphabet.indexOf(item)];
    },'')
  }
  decrypt(encryptedMessage, key) {

  }

  letterArr(letter) {
    return [].concat(this.alphabet.filter(item => item >= letter), this.alphabet.filter(item => item < letter));
  }
}

module.exports = VigenereCipheringMachine;
