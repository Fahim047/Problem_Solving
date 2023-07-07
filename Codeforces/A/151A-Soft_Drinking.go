package main

import (
	"fmt"
	"math"
)

func main() {

	var n, k, l, c, d, p, nl, np int
	fmt.Scan(&n, &k, &l, &c, &d, &p, &nl, &np)

	drink := (k*l)/nl
	lime := c*d
	salt := p/np

	res:= math.Min(float64(drink),math.Min(float64(lime),float64(salt)))
	fmt.Println(int(res)/n);

}