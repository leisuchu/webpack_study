class Calculater {
  constructor(len) {
    this.len = len;
  }

  add(x, y) {
    return (Number(x) + Number(y)).toFixed(this.len);
  }

  sub(x, y) {
    return (Number(x) - Number(y)).toFixed(this.len);
  }

  mul(x, y) {
    return (Number(x) * Number(y)).toFixed(this.len);
  }

  div(x, y) {
    return (Number(x) / Number(y)).toFixed(this.len);
  }
}

export default Calculater;
