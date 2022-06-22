// Write class below
class ShiftCipher {
  constructor(shiftValue) {
    this._shiftValue = shiftValue;
  }

  encrypt(originalString) {
    let lowerCaseString = originalString.toLowerCase();
    let returnString = '';
    for (let i = 0; i < lowerCaseString.length; i++) {
      let replacementCharacter = "";
      if (lowerCaseString.charCodeAt(i) >=97 && lowerCaseString.charCodeAt(i) <=122 && (lowerCaseString.charCodeAt(i) + this._shiftValue) <= 122) {
        replacementCharacter = String.fromCharCode(lowerCaseString.charCodeAt(i) + this._shiftValue);
      } else if ((lowerCaseString.charCodeAt(i) >=97 && lowerCaseString.charCodeAt(i) <=122 && (lowerCaseString.charCodeAt(i) + this._shiftValue) > 122)) {
        let incrementValue = (lowerCaseString.charCodeAt(i) + this._shiftValue) - 122;
        replacementCharacter = String.fromCharCode(97 + (incrementValue - 1));
      } else {
        replacementCharacter = lowerCaseString[i];
      }
      returnString += replacementCharacter;
    }
    returnString = returnString.toUpperCase();
    return returnString;
  }

  decrypt(originalString) {
    let lowerCaseString = originalString.toLowerCase();
    let returnString = '';
    for (let i = 0; i < lowerCaseString.length; i++) {
      let replacementCharacter = "";
      if (lowerCaseString.charCodeAt(i) >=97 && lowerCaseString.charCodeAt(i) <=122 && (lowerCaseString.charCodeAt(i) - this._shiftValue) >= 97) {
        replacementCharacter = String.fromCharCode(lowerCaseString.charCodeAt(i) - this._shiftValue);
      } else if ((lowerCaseString.charCodeAt(i) >=97 && lowerCaseString.charCodeAt(i) <=122 && (lowerCaseString.charCodeAt(i) - this._shiftValue) < 97)) {
        let incrementValue = (97 - (lowerCaseString.charCodeAt(i) - this._shiftValue));
        replacementCharacter = String.fromCharCode(122 - (incrementValue - 1));
      } else {
        replacementCharacter = lowerCaseString[i];
      }
      returnString += replacementCharacter;
    }
    return returnString;
  }
}