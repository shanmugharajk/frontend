function compact(array) {
  // falsy values => undefined, null, false, 0, "", and NaN
  const result = [];

  for (const value of array) {
    if (value) {
      result.push(value);
    }
  }

  return result;
}
