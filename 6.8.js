let timerId = setTimeout(() => alert("아무 일도 일어나지 않음"), 1000);
alert(timerId);

clearTimeout(timerId);
alert(timerId);
