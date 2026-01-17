#include <iostream>
#include <vector>

using namespace std;

int calcGCD(int a, int b){
    if(a < b) swap(a, b);

    while(b){
        int r = a % b;
        a = b;
        b = r;
    }

    return a;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int s, n;
    cin>>n>>s;

    vector<int>diff(n);
    for(int i=0; i<n; i++){
        int pos;
        cin>>pos;
        diff[i] = abs(pos - s);
    }

    int result = diff[0];

    for(int i=1; i<n; i++){
        result = calcGCD(result, diff[i]);
    }

    cout<<result;
}