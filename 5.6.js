let range = {
  from: 1,
  to: 5,
  object() {
    this.current = this.from;
    return this;
  },
};
alert(range.object());
