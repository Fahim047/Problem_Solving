/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const findThePrefixCommonArray = function (A, B) {
	const n = A.length;
	const freq = [...Array(n + 1).fill(0)];
	const res = [];
	let count = 0;
	for (let i = 0; i < n; i++) {
		freq[A[i]]++;
		if (freq[A[i]] > 1) count++;
		freq[B[i]]++;
		if (freq[B[i]] > 1) count++;
		res.push(count);
	}
	return res;
};

console.log(findThePrefixCommonArray([2, 3, 1], [3, 1, 2]));
