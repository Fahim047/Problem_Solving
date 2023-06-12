#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

int main(){
    int n, l, a[10005];
    cin >> n >> l;

    double res;
    for(int i=0; i<n; i++){
        cin >> a[i];
    }

    sort(a,a+n);

    res = max(a[0], l-a[n-1]);

    for(int i=0; i<n-1; i++){
        res = max(res, (double)(a[i+1]-a[i])/2);
    }
        
    // res = 2.555555;
    // printf("%.10f\n", res);
    cout << fixed << setprecision(10) << res << endl;

    return 0;
}