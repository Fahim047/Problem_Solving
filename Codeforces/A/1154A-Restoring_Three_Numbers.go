package main

import (
	"fmt"
	"sort"
)

func main() {
	numbers := make([]int, 4)
	for i := 0; i < 4; i++ {
		fmt.Scan(&numbers[i])
	}

	sort.Ints(numbers) 

	s := numbers[3]
	a := s - numbers[2]
	b := s - numbers[1]
	c := s - numbers[0]

	fmt.Println(a, b, c)
}