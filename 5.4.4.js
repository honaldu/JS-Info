const sumInput = () => {
  const array = [];
  let value = null;
  while (true) {
    value = prompt("숫자 입력 좀!");
    if (!isFinite(value) || value === null || value === "") {
      break;
    }
    array.push(value);
  }
  let sum = 0;
  for (let num of array) {
    sum += Number(num);
  }
  alert(sum);
};

sumInput();
