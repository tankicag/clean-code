// BEFORE
function factorialize(num) {
  let COUNT = num;

  if (COUNT === 0) {
    return 1;
  }

  for (let i = 1; i < COUNT; i++) {
    num = num * i;
  }

  return num;
}

// AFTER
function factorialize(num) {
  let factorialTotal = num;

  if (num === 0) {
    return 1;
  }

  for (let i = 1; i < num; i++) {
    factorialTotal = num * i;
  }

  return factorialTotal;
}
