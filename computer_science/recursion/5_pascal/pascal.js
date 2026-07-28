const pascal = function (n) {
  if (n === 1) return [1];

  const smaller = n - 1;
  const array = pascal(smaller);

  array.unshift(0);
  array.push(0);

  const result = array.map((element, index) => {
    if (index === array.length - 1) {
      return;
    }

    return (element = element + array[index + 1]);
  });

  result.splice(-1, 1);
  return result;
};

// Do not edit below this line
module.exports = pascal;
