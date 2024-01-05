function longestIncreasingSubsequence(nums) {
	lis = new Array(nums.length).fill(1);
	// console.log(lis);
	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				lis[i] = Math.max(lis[i], lis[j] + 1);
			}
		}
	}
	console.log(Math.max(...lis));
}

longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]);
