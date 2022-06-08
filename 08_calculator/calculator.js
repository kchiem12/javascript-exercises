const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1-num2;
};

const sum = function(arr) {
  result = 0;
	for (let i = 0; i < arr.length; i++) {
    result = add(result, arr[i]);
  }
  return result;
};

const multiply = function(arr) {
  result = 0;
  arr.length == 0 ? result : result = 1;
  for (let i = 0; i < arr.length; i++) {
    result = result * arr[i];
  }
  return result;
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(num) {
	if (num == 0) return 1;
  return num * factorial(--num);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
