/**
 * Author: Fahimul Islam
 * Date: 15 January 2025
 * Problem: 2429. Minimize XOR
 * Link: https://leetcode.com/problems/minimize-xor
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
const minimizeXor = function (num1, num2) {
	let count = 0;
	let ans = 0;
	while (num2 > 0) {
		if ((num2 & 1) === 1) {
			count++;
		}
		num2 >>= 1;
	}
	for (let i = 31; i >= 0; i--) {
		if ((num1 & (1 << i)) > 0 && count > 0) {
			ans |= 1 << i;
			count--;
		}
	}
	for (let i = 0; i < 32; i++) {
		if (count > 0 && (ans & (1 << i)) === 0) {
			ans |= 1 << i;
			count--;
		}
	}
	return ans;
};
console.log(minimizeXor(3, 5));
