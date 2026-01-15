#include <iostream>

using namespace std;

int calcGCD(int a, int b){
    if(a > b){
        swap(a, b);
    }

    while(b > 0){
        int r = a % b;
        a = b;
        b = r;
    }

    return a;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int a, b;
    cin>>a>>b;

    int gcd = calcGCD(a, b);
    int lcm = a * b / gcd;

    cout<<gcd<<"\n"<<lcm;
}