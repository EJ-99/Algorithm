#include <iostream>

using namespace std;

void add(int &s, int num){
    s |= (1 << num);
}

void remove(int &s, int num){
    s &= ~(1 << num);
}

int check(int &s, int num){
    if(s & (1 << num)) return 1;
    return 0;
}

void toggle(int &s, int num){
    s ^= (1 << num);
}

void all(int &s){
    s = (1 << 21) - 1;
}

void empty(int &s){
    s = 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int m;
    cin>>m;

    string cmd;
    int x, s = 0;
    while(m--){
        cin>>cmd;

        if(cmd == "all") all(s);
        else if(cmd == "empty") empty(s);
        else{
            cin>>x;
            if(cmd == "add") add(s, x);
            else if(cmd == "remove") remove(s, x);
            else if(cmd == "check") cout<<check(s, x)<<"\n";
            else toggle(s, x);
        }
    }
}
