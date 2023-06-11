#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
bool vis[100005];

int main(){
    int a, b, c, d, n, cnt=0;
    cin >> a >> b >> c >> d >> n;
    // int m = min(a,min(b,min(c,d)));
    // cout << m <<endl;
    for(int i=a; i<=n; i+=a) vis[i] = true;
    for(int i=b; i<=n; i+=b) vis[i] = true;
    for(int i=c; i<=n; i+=c) vis[i] = true;
    for(int i=d; i<=n; i+=d) vis[i] = true;

    for(int i=1; i<=n; i++){
        if(vis[i]) cnt++;
    }

    cout << cnt << endl;
    
    return 0;
}