const printNumbers = (from, to) => {
  if (from > to) {
    return clearTimeout(printNumbers);
  }

  console.log(from++);
  setTimeout(printNumbers, 1000, from, to);
};

setTimeout(printNumbers, 1000, 1, 5);
