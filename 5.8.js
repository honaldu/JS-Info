let john = { name: "John" };

let array = [john, 0, 1];

john = { name: "hou" };

alert(JSON.stringify(array[0]));
