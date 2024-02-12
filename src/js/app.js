export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const reg1 = /^[a-z][\w-]*[a-z]$/i;
    const reg2 = /\d{4,}/;
    return reg1.test(this.name) && !reg2.test(this.name);
  }
}
