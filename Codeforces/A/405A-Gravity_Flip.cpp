#include<bits/stdc++.h>

using namespace std;

int main(){

    int n,a[105],i;
    cin>>n;

    for(i=0;i<n;i++) cin>>a[i];

    sort(a,a+n);

    for(i=0;i<n;i++) cout<<a[i]<<" ";

    return 0;
}