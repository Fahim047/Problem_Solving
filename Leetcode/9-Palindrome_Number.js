/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
	let reversedString = x.toString().split('').reverse().join('');
	return reversedString == x;
};
