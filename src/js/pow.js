// var number = +prompt('������� �����', '');
// console.log('����� = ', number);
// var power = +prompt('������� �������', '');
// console.log('������� = ', power);
var mathPow = function (number, power) {
  result = 1;
  for (var i = 0; i < power; i++) {
    result *= number;
  }
  return result;
};

var pow = mathPow(2, 3);

console.log('--------------------------');
console.log('����� = ' + pow);
// alert('����� = ' + pow);


module.exports = mathPow;