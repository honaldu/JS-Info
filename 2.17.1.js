let ask = (question, yes, no) => {
  confirm(question) ? yes() : no();
};

ask(
  "동의?",
  () => {
    alert("동의");
  },
  () => {
    alert("동의 거부!");
  }
);
