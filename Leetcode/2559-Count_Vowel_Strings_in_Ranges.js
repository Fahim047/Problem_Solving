/**
 * Author: Fahimul Islam
 * Date: 2 January 2025
 * Problem: https://leetcode.com/problems/count-vowel-strings-in-ranges/
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
const vowelStrings = function (words, queries) {
	const regex = /^[aeiou](.*[aeiou])?$/;
	const prefix = new Array(words.length + 1).fill(0);
	prefix[0] = regex.test(words[0]) ? 1 : 0;

	for (let i = 1; i < words.length; i++) {
		prefix[i] = prefix[i - 1] + (regex.test(words[i]) ? 1 : 0);
	}
	return queries.map(([start, end]) =>
		start === 0 ? prefix[end] : prefix[end] - prefix[start - 1]
	);
};
