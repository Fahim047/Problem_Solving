/**
 * Author: Fahimul Islam
 * Date: 10 January 2025
 * Problem: 916. Word Subsets
 * Link: https://leetcode.com/problems/word-subsets
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
const wordSubsets = function (words1, words2) {
	const freqMap = new Map();
	for (const word of words2) {
		const wordFreqMap = new Map();
		for (const char of word) {
			wordFreqMap.set(char, (wordFreqMap.get(char) || 0) + 1);
		}
		for (const [char, freq] of wordFreqMap) {
			freqMap.set(char, Math.max(freqMap.get(char) || 0, freq));
		}
	}

	return words1.filter((word) => {
		const freqMap2 = new Map();
		for (const char of word) {
			freqMap2.set(char, (freqMap2.get(char) || 0) + 1);
		}
		for (const [key, value] of freqMap) {
			if (!freqMap2.has(key) || freqMap2.get(key) < value) {
				return false;
			}
		}
		return true;
	});
};
