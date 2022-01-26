//THIS IS THE IMPLEMENTAION OF FLAT MAP IN JS
//2022.01.26

Array.prototype._flatMap = function (callback) {
  //flat array

  const flatArray = [];

  for (let i = 0; i < this.length; i++) {
    //"this" is an instance of array object
    for (let j = 0; j < this[i].length; j++) {
      //
      flatArray.push(callback(this[i][j], i, this));
    }
  }

  /*

ANOTHER SHORT IMPLEMENTATION IS TO USE ARRAY DESTRUCTURE 
FROM JS LIBRARY
flatArray.push(...callback(this[i]));

*/

  return flatArray;
};

//example

const arr = [
  [1, 2, 3, 4],
  [1, 2],
  [5, 4, 3, 6, 8],
];

const n = arr._flatMap((item) => item);

console.log(n);
