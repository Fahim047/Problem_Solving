/**
 * Author: Fahimul Islam
 * Date: 9 January 2025
 * Problem: 2185. Counting Words With a Given Prefix
 * Link: https://leetcode.com/problems/counting-words-with-a-given-prefix
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
const prefixCount = function (words, pref) {
	return words.filter((word) => word.startsWith(pref)).length;
};
