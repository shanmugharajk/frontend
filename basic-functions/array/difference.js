function difference(array, values) {
  const result = [];
  const valuesSet = new Set(values);

  for (const val of array) {
    if (!valuesSet.has(val) && val !== undefined) {
      result.push(val);
    }
  }

  return result;
}
