#include<stdio.h>
int main()
{
	int t,n,sum,rem1,rem2;
	scanf("%d",&t);
	while(t--)
    {
        scanf("%d",&n);
        rem1=n%10;
        while(n!=0)
        {
            rem2=n%10;
            n=n/10;
        }
        sum=rem1+rem2;
        printf("%d\n",sum);
    }
	return 0;
}

