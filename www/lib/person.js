export class Person {
  constructor(name, surname) {
    this.$name = name;
    this.$surname = surname;
  }
  name() {
    return this.$name;
  }
  surname() {
    return this.surname;
  }
}
