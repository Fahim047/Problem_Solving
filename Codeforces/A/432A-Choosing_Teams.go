package main

import "fmt"

func main() {
	var n, k int
	fmt.Scan(&n, &k)
	arr := make([]int, n)
	
	for i:=0; i<n; i++{
		fmt.Scan(&arr[i])
	}
	var cnt int =0

	for i:=0; i<n;i++{
		x := 5-arr[i]
		if x>=k {
			cnt++
		}
	}
	fmt.Println(cnt/3)
}