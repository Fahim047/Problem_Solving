/**
 * @param {string} romanString
 * @return {number} result
 */
var romanToInt = function (romanString) {
	romanAlphabets = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	let result = 0;
	for (let i = 0; i < romanString.length; i++) {
		if (romanString[i] == 'I' && romanString[i + 1] == 'V') {
			result += 4;
			i++;
		} else if (romanString[i] == 'I' && romanString[i + 1] == 'X') {
			result += 9;
			i++;
		} else if (romanString[i] == 'X' && romanString[i + 1] == 'L') {
			result += 40;
			i++;
		} else if (romanString[i] == 'X' && romanString[i + 1] == 'C') {
			result += 90;
			i++;
		} else if (romanString[i] == 'C' && romanString[i + 1] == 'D') {
			result += 400;
			i++;
		} else if (romanString[i] == 'C' && romanString[i + 1] == 'M') {
			result += 900;
			i++;
		} else result += romanAlphabets[romanString[i]];
	}
	return result;
};
