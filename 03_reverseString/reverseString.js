const reverseString = function (string) {
  let newString = "";
  let length = string.length - 1;

  if (string === "") {
    return newString;
  }
  do {
    newString += string.at(length);
    length--;
  } while (length >= 0);

  return newString;
};

reverseString("hello");
reverseString("hello there");
reverseString("123! abc! Hello, Odinite.");
reverseString("");

// Do not edit below this line
module.exports = reverseString;
