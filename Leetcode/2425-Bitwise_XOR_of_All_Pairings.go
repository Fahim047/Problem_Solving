/**
 * Author: Fahimul Islam
 * Date: 16 January 2025
 * Problem: 2425. Bitwise XOR of All Pairings
 * Link: https://leetcode.com/problems/bitwise-xor-of-all-pairings
 */
 func xorAllNums(nums1 []int, nums2 []int) int {
	ans := 0
	
	if len(nums2) % 2 == 1 {
			for _,num := range nums1 {
					ans ^= num
			}
	}

	if len(nums1) % 2 == 1 {
			for _,num := range nums2 {
					ans ^= num
			}
	}

	return ans
	
}