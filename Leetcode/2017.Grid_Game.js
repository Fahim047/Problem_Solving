/**
 * Author: Fahimul Islam
 * Date: 21 January 2025
 * Problem: 2017. Grid Game
 * Link: https://leetcode.com/problems/grid-game
 * @param {number[][]} grid
 * @return {number}
 */
const gridGame = function (grid) {
	const numOfCols = grid[0].length;

	if (numOfCols < 2) return 0;

	let topSum = grid[0].reduce(
		(accumulator, current) => accumulator + current,
		0
	);

	let bottomSum = 0,
		minSum = Infinity;

	for (let i = 0; i < numOfCols; i++) {
		topSum -= grid[0][i];
		minSum = Math.min(minSum, Math.max(topSum, bottomSum));
		bottomSum += grid[1][i];
	}

	return minSum;
};
function init() {
	const grid = [
		[2, 5, 4],
		[1, 5, 1],
	];
	console.log(gridGame(grid));
}
init();
