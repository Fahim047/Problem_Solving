#include<bits/stdc++.h>
using namespace std;

int main(){
	int t;
	cin>>t;
	while(t--){
		int n, a[3], x , y, z;
		cin >> a[0] >> a[1] >> a[2];
		sort(a,a+3);
		
		x = a[0];
		y = a[1];
		z = a[2];

		if(z-x == y)
			cout << "YES" << endl;
		else if(x == y && z%2 == 0)
			cout << "YES" << endl;
		else if(x%2 == 0 && y == z)
			cout << "YES" << endl;
		else
			cout << "NO" << endl;
		
	}
	return 0;
}