function add(a, b) {
  return a + b;
}

function multi(a, b) {
  return a * b;
}

function power(a, b) {
  return a ** b;
}

function minus(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

const calculator = {
  add: add,
  minus: minus,
  power: power,
  divide: divide,
  multi: multi,
};

add(1, 2);
minus(1, 2);
divide(1, 2);
power(1, 2);
multi(1, 2);
