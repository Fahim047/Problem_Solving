/**
 * Author: Fahimul Islam
 * Date: 7 January 2025
 * Problem: https://leetcode.com/problems/string-matching-in-an-array
 * @param {string[]} words
 * @return {string[]}
 */
const stringMatching = function (words) {
	return words.filter((word) =>
		words.some((w) => w !== word && w.includes(word))
	);
};
