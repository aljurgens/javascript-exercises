function add (augend, addend) {
 return augend + addend;
}

function subtract (minuend, subtrahend) {
	return minuend - subtrahend;
}

function sum (arr) {
	let result = 0;
	for(const value of arr) {
		result += value;
	}

	return result;
}

function multiply (arr) {
	let result = 1;
	for(const value of arr) {
		result *= value;
	}

	return result;
}

function power(base, exponent) {
	return Math.pow(base, exponent);
}

function factorial(int) {
	if (int >= 1) {
		return int * factorial(int - 1);
	} else {
		return 1;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
