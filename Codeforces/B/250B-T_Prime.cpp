#include<bits/stdc++.h>
using namespace std;
typedef long long int ll;
const ll N=1000000;
ll prime[N+5];

void isprime(ll n)
{
    ll i,j;
    prime[0]=prime[1]=1;
    for(i=2;i*i<=n;i++)
    {
        for(j=i*i;j<=n;j+=i)
        {
            prime[j]=1;
        }
    }
}

int main()
{
    isprime(N);
    int tc;
    cin>>tc;
    while(tc--)
    {
        ll x,sq;
        cin>>x;
        sq=sqrt(x);
        if(x==sq*sq && prime[sq]==0 && x>1)
            cout<<"YES"<<endl;
        else
            cout<<"NO"<<endl;
    }

    return 0;
}