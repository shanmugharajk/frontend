function dropWhileRight(array, predicate) {
  let ptr = array.length - 1;

  while (ptr >= 0 && predicate(array[ptr], ptr, array)) {
    ptr--;
  }

  return array.slice(0, ptr + 1);
}
