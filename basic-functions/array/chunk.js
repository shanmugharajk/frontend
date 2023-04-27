/**
 * @param {Array} array - The array to process.
 * @param {number} [size=1] - The length of each chunk.
 * @returns {Array} - Returns the new array of chunks.
 *
 * chunk(["a", "b", "c", "d"])    -> [['a'], ['b'], ['c'], ['d']]
 * chunk([1, 2, 3, 4], 2)         -> [[1, 2], [3, 4]]
 * chunk(["a", "b", "c", "d"], 3) -> [['a', 'b', 'c'], ['d']]
 *
 */
function chunk(array, size = 1) {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}
