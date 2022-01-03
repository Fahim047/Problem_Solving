#include<bits/stdc++.h>
using namespace std;

int main(){
	int a;
	float b,c;
	scanf("%d %f",&a,&b);
	if(a+0.50<=b && a%5==0)
	{
	    c=b-a-0.50;
	    printf("%.2f\n",c);
	}
	else
	{
	    printf("%.2f\n",b);
	}
	return 0;
}