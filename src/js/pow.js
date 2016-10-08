// var number = +prompt('Введите число', '');
// console.log('Число = ', number);
// var power = +prompt('Введите степень', '');
// console.log('Степень = ', power);
var mathPow = function (number, power) {
  result = 1;
  for (var i = 0; i < power; i++) {
    result *= number;
  }
  return result;
};

var pow = mathPow(2, 3);

console.log('--------------------------');
console.log('Ответ = ' + pow);
// alert('Ответ = ' + pow);


module.exports = mathPow;