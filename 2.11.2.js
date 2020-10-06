const id = prompt("누구야!");
if (id === null || id === "") {
  alert("취소");
} else if (id !== "Admin") {
  alert("난 너 모름");
} else {
  const password = prompt("비번");
  if (password === null || password === "") {
    alert("취소");
  } else if (password !== "TheMaster") {
    alert("틀림 ");
  } else {
    alert("환영");
  }
}
