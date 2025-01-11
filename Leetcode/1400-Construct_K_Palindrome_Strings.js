/**
 * Author: Fahimul Islam
 * Date: 11 January 2025
 * Problem: 1400. Construct K Palindrome Strings
 * Link: https://leetcode.com/problems/construct-k-palindrome-strings/
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const canConstruct = function (s, k) {
	if (s.length < k) return false;
	const freq = new Map();
	for (const char of s) {
		freq.set(char, (freq.get(char) || 0) + 1);
	}
	let oddCount = 0;
	for (const [key, value] of freq) {
		if (value % 2 !== 0) oddCount++;
	}
	return oddCount <= k;
};
console.log(canConstruct('annabelle', 2));
