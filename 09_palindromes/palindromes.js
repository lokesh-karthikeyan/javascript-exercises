const palindromes = function (string) {
  let arrayString = string
    .toLowerCase()
    .split("")
    .filter((char) => (char >= "a" && char <= "z") || Number(char));

  return arrayString.join("") === arrayString.reverse().join("");
};

palindromes("racecar");
palindromes("racecar!");
palindromes("Racecar!");
palindromes("A car, a man, a maraca.");
palindromes("Animal loots foliated detail of stool lamina.");
palindromes("ZZZZ car, a man, a maracaz.");
palindromes("rac3e3car");
palindromes("r3ace3car");

// Do not edit below this line
module.exports = palindromes;
