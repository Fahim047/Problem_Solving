/**
 * Author: Fahimul Islam
 * Date: 2 February 2025
 * Problem: 1752. Check if Array Is Sorted and Rotated
 * Link: https://leetcode.com/problems/check-if-array-is-sorted-and-rotated
 * @param {number[]} nums
 * @return {boolean}
 */
const check = function (nums) {
	const n = nums.length;
	let count = 0;
	for (let i = 0; i < n; i++) {
		if (nums[i] > nums[(i + 1) % n]) count++;
		if (count > 1) return false;
	}
	return true;
};
