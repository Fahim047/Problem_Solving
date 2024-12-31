/**
 * Author: Fahimul Islam
 * Date: 31 December 2024
 * Problem: https://leetcode.com/problems/minimum-cost-for-tickets/description/
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
	const n = days.at(-1);
	const dp = new Array(n + 1).fill(0);
	for (let i = 1; i < dp.length; i++) {
		if (!days.includes(i)) {
			dp[i] = dp[i - 1];
		} else {
			dp[i] = Math.min(
				dp[i - 1] + costs[0],
				dp[Math.max(0, i - 7)] + costs[1],
				dp[Math.max(0, i - 30)] + costs[2]
			);
		}
	}
	return dp.at(-1);
};
