#include <iostream>
#include <vector>
#include <deque>

using namespace std;

vector<bool> check(26, false);

bool turn(int cnt, char ch, deque<char> &wheel){
    while(cnt--){
        char back = wheel.back();
        wheel.pop_back();

        if(cnt == 0){
            if(back != ch && back != '?') return false;
            if(back == '?' && check[ch - 'A']) return false;

            back = ch;
            check[ch - 'A'] = true;
        }

        wheel.push_front(back);
    }

    return true;
}

string getWord(deque<char> &wheel){
    string result = "";

    while(!wheel.empty()){
        result += wheel.front();
        wheel.pop_front();
    }

    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, k;
    cin>>n>>k;
    deque<char> wheel;

    for(int i=0; i<n; i++){
        wheel.push_back('?');
    }

    while(k--){
        int cnt;
        char ch;

        cin>>cnt>>ch;

        if(!turn(cnt, ch, wheel)){
            break;
        }
    }

    if(k >= 0) cout<<"!";
    else cout<<getWord(wheel);
}