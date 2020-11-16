let calculator = {
  x: null,
  y: null,
  read() {
    this.x = Number(prompt());
    this.y = Number(prompt());
  },
  sum() {
    alert(this.x + this.y);
  },
  mul() {
    alert(this.x * this.y);
  },
};

calculator.read();
calculator.sum();
calculator.mul();
