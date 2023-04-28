function once(func) {
  let isExecuted = false;
  let result;

  const executor = function (...params) {
    if (isExecuted) {
      return result;
    }

    isExecuted = true;

    // 'this' refers to the callers context 'this'. So if we use the arrow function
    // lexical this will be bound to this.
    result = func.call(this, ...params);
    return result;
  };

  return executor;
}
