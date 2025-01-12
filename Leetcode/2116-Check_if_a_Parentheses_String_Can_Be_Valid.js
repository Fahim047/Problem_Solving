/**
 * Author: Fahimul Islam
 * Date: 12 January 2024
 * Problem: 2116. Check if a Parentheses String Can Be Valid
 * Link: https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
const canBeValid = (s, locked) => {
	const n = s.length;
	if (n % 2 === 1) return false;
	let count = 0;
	for (let i = 0; i < n; i++) {
		if (s[i] === '(' || locked[i] === '0') {
			count++;
		} else {
			count--;
		}
		if (count < 0) return false;
	}

	count = 0;
	for (let i = n - 1; i >= 0; i--) {
		if (s[i] === ')' || locked[i] === '0') {
			count++;
		} else {
			count--;
		}
		if (count < 0) return false;
	}

	return true;
};
console.log(canBeValid('())())', '101111'));
