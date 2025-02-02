// Author: Fahimul Islam
// Date: 2 February 2025
// Problem: 1752. Check if Array Is Sorted and Rotated
// Link: https://leetcode.com/problems/check-if-array-is-sorted-and-rotated
package main

import "fmt"
func main() {
	fmt.Println(check([]int{2,1,3,4}))
}
func check(nums []int) bool {
	n := len(nums)
	count := 0
	for i := 0; i < n; i++ {
		if nums[i] > nums[(i+1) % n] {
			count++
		}
		if(count > 1) {
			return false
		}
	}
	return true
}