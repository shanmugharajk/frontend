Array.prototype.square = function () {
  const result = [];

  for (const num of this) {
    result.push(num * num);
  }

  return result;
};
