/**
 * Author: Fahimul Islam
 * Date: 1 February 2025
 * Problem: 3151. Special Array I
 * Link: https://leetcode.com/problems/special-array-with-sum-equal-to-1
 * @param {number[]} nums
 * @return {boolean}
 */
const isArraySpecial = function (nums) {
	let res = true;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] % 2 == 0 && nums[i - 1] % 2 == 0) {
			res = false;
			break;
		}
		if (nums[i] % 2 == 1 && nums[i - 1] % 2 == 1) {
			res = false;
			break;
		}
	}
	return res;
};
