#include<bits/stdc++.h>

using namespace std;

int main(){

    int n,m,x;
    cin>>n>>m;
    x = min(n,m);

    if(x%2 == 1) cout<<"Akshat"<<endl;
    else cout<<"Malvika"<<endl;

    return 0;
}