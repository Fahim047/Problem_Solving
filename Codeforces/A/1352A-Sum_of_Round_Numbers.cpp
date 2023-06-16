#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

int main(){
    int tc , l;
    cin >> tc;
    string s;
    while(tc--){
        cin >> s;
        int cnt = 0;
        l = s.size();
        for(int i=0; i<l; i++){
            if(s[i]=='0')
                continue;

            cnt++;
        }
        cout << cnt << endl;
        
        for(int i=0; i<l; i++){
            if(s[i]=='0')
                continue;

            cout << s[i];
            if(i==l-1)
                break;
            for(int j=0; j<l-i-1; j++)
                cout << "0";
            cout << " ";
        }
        cout << endl;
    }

    return 0;
}