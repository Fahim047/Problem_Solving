#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

int main(){
    int n, l, a[10005], res;
    cin >> n >> l;
    
    for(int i=0; i<n; i++){
        cin >> a[i];
    }

    sort(a,a+n);

    res = 2 * max(a[0], l-a[n-1]);

    for(int i=0; i<n-1; i++){
        res = max(res, a[i+1]-a[i]);
    }
        
    // printf("%.10f\n", res);
    cout << fixed << setprecision(10) << (double)res/2 << endl;

    return 0;
}