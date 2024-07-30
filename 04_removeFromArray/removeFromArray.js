const removeFromArray = function (array, ...removeElement) {
  let length = removeElement.length - 1;

  while (length >= 0) {
    let argument = removeElement[length];

    while (array.includes(argument)) {
      let index = array.indexOf(argument);

      array.splice(index, 1);
    }
    length--;
  }

  return array;
};

removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 2, 3], 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
