// Homework_JS_1-2_1-Alexey Bublichenko
'use strict';

function abs(x) {
	if (x<0) x *= -1;
	return x;
}
function pow(base, exponent) {
	var result = 1;
	
	for (var i = 0; i < abs(exponent); i++) {
		result *= base;
	}
	if (exponent < 0) {
		result = 1 / result;
	}
	return result;
}


alert('Вычисление функции: \n\n y = x ^ n \n');

var x = +prompt('Введите основание X:', 2);
var n = +prompt('Введите степень ^n:', 3);

var y = pow(x, n);

console.log('Результат: ', x,'^', n,'=', y);
alert('Результат (продублирован в Console): \n\n' + x + ' ^ ' + n +' = ' + y + '\n');
