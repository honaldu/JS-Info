let iterator = {
  0: 3,
  1: 2,
  2: 3,
};
iterator[Symbol.iterator] = function () {
  return {
    current: 0,
    last: Object.keys(iterator).length - 1,

    next() {
      if (this.current <= this.last) {
        return {
          done: false,
          value: iterator[this.current++],
        };
      } else {
        return { done: true };
      }
    },
  };
};

for (let item of iterator) {
  alert(item);
}
