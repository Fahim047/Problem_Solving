#include<bits/stdc++.h>
using namespace std;
typedef long long int ll;

int main()
{
    ll n, cnt=0;
    cin >> n;
    while(n>0){
        if(n>=100){
            cnt++;
            n-=100;
        }else if(n>=20){
            cnt++;
            n-=20;
        }else if(n>=10){
            cnt++;
            n-=10;
        }else if(n>=5){
            cnt++;
            n-=5;
        }else{
            cnt++;
            n--;
        }
    }
    cout << cnt << endl;
    return 0;
}