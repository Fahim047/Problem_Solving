#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

int main(){
    ll n, m, a[100005], res=0, flag=1, z=0;
    cin >> n >> m;
    
    for(int i=1; i<=m; i++) 
        cin >> a[i];

    for(int i=1; i<=m; i++){

        if(flag>a[i])
            z = n-flag+a[i];
        else
            z = a[i]-flag;

        res+=z;
        flag = a[i];
    }

    cout << res << endl;

    return 0;
}