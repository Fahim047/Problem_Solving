func findThePrefixCommonArray(A []int, B []int) []int {
	n := len(A)
	freq := make([]int, n+1)
	res := make([]int,n)
	count := 0

	for i:=0;i<n;i++ {
		freq[A[i]]++;
		if(freq[A[i]]>1){
            count++
        }

		freq[B[i]]++;
		if(freq[B[i]]>1) {
            count++
        }
        
		res[i]=count
	}
	return res;
}