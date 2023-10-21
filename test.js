const a = 10;

if (a == 10) {
  const a = 20;
  console.log(a);
}

function outer() {
  const result = inner(sum, 60, 40);
  console.log(result);
}

function inner(callback, a, b) {
  if (a > 0 && b > 0) {
    const sum = callback(a, b);
    return sum;
  }
}

function sum(a, b) {
  const num1 = a;
  const num2 = b;

  return num1 + num2;
}

outer();

console.log(a);
