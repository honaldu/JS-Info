function checkAge(age) {
  age > 18 ? true : confirm("동의 안 받음?");
}
checkAge(13);
function checkAgeOr(age) {
  age > 18 || confirm("동의 안 받음?");
}
checkAgeOr(13);
