#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

int main(){
    int n, x, h=0, c=0, ans=0;
    cin >> n;

    for(int i=0; i<n; i++){
        cin >> x;
        if(x==-1){
            if(h>0) h--;
            else ans++; 
        }else h+=x;
    }

    cout << ans << endl;
    
    return 0;
}