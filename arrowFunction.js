function add(a, b) {
  return a + b;
}

console.log('penjumlahan ===>', add(5, 10))


const divide = function(numberOne = 1, numberTwo = 1) {
  console.log('numberOne', numberOne);
  console.log('numberTwo', numberTwo);
  10 / undefined
  return numberOne / numberTwo;
}

console.log('pembagian ====> ', divide(10, 5))


const multiply = (numberOne, numberTwo) => (numberOne * numberTwo)

console.log('perkalian', multiply(4, 8))

const showNumber = x => x;

console.log('showNumber ', showNumber(5));
