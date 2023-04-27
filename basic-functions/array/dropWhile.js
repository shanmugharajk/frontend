function dropWhile(array, predicate) {
  let ptr = 0;

  while (ptr < array.length && predicate(array[ptr], ptr, array)) {
    ptr++;
  }

  return array.slice(ptr--, array.length);
}
