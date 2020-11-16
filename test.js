describe("pow", function () {
  function makeTest(x) {
    let expected = x * x * x;
    it(`${x}을/3번 곱하면 ${expected}입니다`, function () {
      assert.equal(pow(x, 3), expected);
    });
  }
  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }
});
