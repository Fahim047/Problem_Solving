/**
 * Author: Fahimul Islam
 * Date: 13 January 2025
 * Problem: 3223. Minimum Length of String After Operations
 * Link: https://leetcode.com/problems/minimum-length-of-string-after-operations
 * @param {string} s
 * @return {number}
 */
const minimumLength = function (s) {
	const freq = {};
	for (const char of s) {
		freq[char] = (freq[char] || 0) + 1;
	}
	let count = 0;
	for (const char in freq) {
		if (freq[char] % 2 === 1) {
			count++;
		} else {
			count += 2;
		}
	}
	return count;
};
console.log(minimumLength('aa'));
