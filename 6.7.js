function getFunc() {
  let value = "test";

  let func = new Function("value", "alert(value)");
  func(value);
}

alert(getFunc());
