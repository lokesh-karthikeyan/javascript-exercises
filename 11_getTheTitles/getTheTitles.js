const getTheTitles = function (arrOfObj) {
  return arrOfObj.flatMap((item) => item.title);
};

const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
