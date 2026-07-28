const permutations = function (array) {
  const result = [];
  
  if (array.length === 0 || array.length === 1) {
    result.push(array);
    return result;
  }

  const smaller = array.slice(0, -1);
  const removed = array[array.length - 1];

  const list = permutations(smaller);

  list.forEach((element) => {
    for (let i = 0; i < array.length; i++) {
      const newArray = element.slice(0, array.length - 1);
      newArray.splice(i, 0, removed);

      result.push(newArray);
    }
  });

  return result;
};

const test = permutations([1, 2, 3]);
console.log(test);

// Do not edit below this line
module.exports = permutations;

// [1] return [[1]]
// [1,2] return [[1, 2],[2, 1]]
// [1, 2, 3] return [ [1, 2, 3],[1, 3, 2],[2, 1, 3],[2, 3, 1],[3, 1, 2],[3, 2, 1]]
