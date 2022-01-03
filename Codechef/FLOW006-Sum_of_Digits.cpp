#include<stdio.h>
int main()
{
	int t,n,sum=0,rem;
	scanf("%d",&t);
	while(t--)
	{
		scanf("%d",&n);
		while(n!=0)
		{
			rem=n%10;
			sum=sum+rem;
			n=n/10;
		}
		printf("%d\n",sum);
		sum=0;
	}
	return 0;
}
