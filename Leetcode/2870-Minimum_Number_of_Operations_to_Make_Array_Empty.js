/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
	// counting frequency of each element of nums array
	const freq = {};
	for (const element of nums) {
		freq[element] = (freq[element] || 0) + 1;
	}

	// iterating over frequency object and calculating minimum operations needed
	let count = 0;
	for (const element in freq) {
		console.log(element, freq[element]);
		if (freq[element] == 1) return -1;
		count += Math.ceil(freq[element] / 3);
	}
	return count;
};
