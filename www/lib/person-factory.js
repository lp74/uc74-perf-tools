export function Person(name, surname) {
  var $name;
  var $surname;
  return {
    name: function name() {
      return $name;
    },
    surname: function surname() {
      return $surname;
    }
  };
}
