package main

import "fmt"

func main() {
	nums := []int{1}
	fmt.Println(isArraySpecial(nums))
}
func isArraySpecial(nums []int) bool {
	res := true
	for i:=1;i<len(nums); i++ {
		if nums[i] % 2 == 0 && nums[i-1] % 2 == 0 {
			res = false
			break
		}
		if nums[i] % 2 == 1 && nums[i-1] % 2 == 1 {
			res = false
			break
		}
	}
	return res
}
