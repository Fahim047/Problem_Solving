/**
 * Author: Fahimul Islam
 * Date: 3 January 2025
 * Problem: https://leetcode.com/problems/number-of-ways-to-split-array
 * @param {number[]} nums
 * @return {number}
 */
const waysToSplitArray = function (nums) {
	const prefix = new Array(nums.length).fill(0);
	prefix[0] = nums[0];
	for (let i = 1; i < nums.length; i++) {
		prefix[i] = prefix[i - 1] + nums[i];
	}
	let count = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		if (prefix[i] >= prefix[nums.length - 1] - prefix[i]) {
			count++;
		}
	}
	return count;
};
