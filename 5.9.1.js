// 객체 빈 값을 경우 0 반환
// 객체 키-값으로 변형
// reduce 함수로 값 누적 후 return

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const sumSalareis = (obj) => {
  const array = Object.entries(obj);
  if (array.length == 0) {
    return 0;
  }
  let num = 0;

  console.log(array.reduce((sum, item) => sum + item[1], 0));
};
sumSalareis(salaries);
