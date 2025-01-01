/**
 * Author: Fahimul Islam
 * Date: 1 January 2025
 * Problem: https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/
 * Time Complexity: O(n)
 * @param {string} s
 * @return {number}
 */
const maxScore = function (s) {
	let maxSum = 0;
	let zeros = 0;
	let totalOnes = s.split('1').length - 1;
	for (let i = 0; i < s.length - 1; i++) {
		s[i] === '0' ? zeros++ : totalOnes--;
		maxSum = Math.max(maxSum, zeros + totalOnes);
	}
	return maxSum;
};
