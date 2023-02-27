#include <bits/stdc++.h>
using namespace std;

typedef long long int ll;
int vis[101];

int main(){
	int n,arr[102];
	int x=0, y=0, max=0, min=100;

	cin>> n;
	
	for(int i=0; i<n; i++){
		cin >> arr[i];
		if(arr[i] > max){
			max=arr[i];
			x=i;
		}
		if(arr[i] <= min){
			min=arr[i];
			y=i;
		}
	}
	if(x>y)
		cout << x+n-y-2 << endl;
	else 
		cout << x+n-y-1 << endl;

  	return 0;
}