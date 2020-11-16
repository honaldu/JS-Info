function ask(question, handler) {
  let isYes = confirm(question);

  if (handler.length === 0) {
    if (isYes) handlers[0]();
  } else {
    handler(isYes);
  }
}

// 사용자가 OK를 클릭한 경우, 핸들러 두 개를 모두 호출함
// 사용자가 Cancel을 클릭한 경우, 두 번째 핸들러만 호출함
ask(
  "질문 있으신가요?",
  () => alert("OK를 선택하셨습니다."),
  (result) => alert(result)
);
