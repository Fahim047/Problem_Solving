#include<bits/stdc++.h>
using namespace std;
typedef long long int ll;

int main()
{
    int n, k, l, c, d, p, nl, np;
    cin >> n >> k >> l >> c >> d >> p >> nl >> np;

    int drink = (k*l)/nl;
    int lime = c*d;
    int salt = p/np;
    int res = min(drink, min(lime, salt))/n;
    cout << res << endl;
    return 0;
}