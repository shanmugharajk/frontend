// return defaultValue when the value is undefined.
function get(objectParam, pathParam, defaultValue) {
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split(".");

  let index = 0;
  let length = path.length;
  let object = objectParam;

  while (index < length) {
    object = object[path[index]];

    if (object === null || object === undefined) {
      return object !== undefined ? object : defaultValue;
    }

    index++;
  }

  return object !== undefined ? object : defaultValue;
}
