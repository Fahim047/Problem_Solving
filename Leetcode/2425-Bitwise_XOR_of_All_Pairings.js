/**
 * Author: Fahimul Islam
 * Date: 16 January 2025
 * Problem: 2425. Bitwise XOR of All Pairings
 * Link: https://leetcode.com/problems/bitwise-xor-of-all-pairings
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const xorAllNums = function (nums1, nums2) {
	let ans = 0;
	if (nums2.length % 2 === 1) {
		for (const num of nums1) ans ^= num;
	}
	if (nums1.length % 2 === 1) {
		for (const num of nums2) ans ^= num;
	}
	return ans;
};

function init() {
	const nums1 = [2, 1, 3],
		nums2 = [10, 2, 5, 0];
	console.log(xorAllNums(nums1, nums2));
}
init();
