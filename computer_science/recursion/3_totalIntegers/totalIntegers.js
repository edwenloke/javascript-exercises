const totalIntegers = function (obj) {
  const isObject = (value) => typeof value === "object" && value !== null;

  if (!isObject(obj)) return;

  let count = 0;

  const items = Object.values(obj);

  for (const item of items) {
    if (Number.isInteger(item)) {
      count++;
    } else if (isObject(item)) {
      count += totalIntegers(item);
    }
  }

  return count;
};

// Do not edit below this line
module.exports = totalIntegers;

// totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // returns 7
// totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } }); // returns 4
