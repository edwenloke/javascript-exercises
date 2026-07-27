const contains = function (obj, value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return true;
    }

    if (Number.isNaN(value) && Number.isNaN(obj[key])) {
      return true;
    }

    if (obj[key] !== null && typeof obj[key] === "object") {
      const result = contains(obj[key], value);
      if (result) return true;
    }
  }

  return false;
};

// Do not edit below this line
module.exports = contains;
