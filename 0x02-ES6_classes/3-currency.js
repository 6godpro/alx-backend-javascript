export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(value) {
    Currency.verify(value, 'Code');
    this._code = value;
  }

  set name(value) {
    Currency.verify(value, 'Name');
    this._name = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }

  static verify(value, ref) {
    if (typeof value !== typeof String()) {
      throw TypeError(`${ref} must be a string`);
    }
  }
}
