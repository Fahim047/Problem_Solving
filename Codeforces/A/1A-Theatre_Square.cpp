#include<stdio.h>
int main()
{
    long long int n,m,a,c,d;
    scanf("%lld %lld %lld",&n,&m,&a);
    if(n%a==0)
        c=n/a;
    else
        c=(n/a)+1;
    if(m%a==0)
        d=(m/a);
    else
    d=(m/a)+1;
    printf("%lld\n",c*d);
    return 0;
}