#include <iostream>
#include <unordered_map>

using namespace std;

int main() {
    string S;
    cin>>S;

    int length = S.length();
    unordered_map<string, int> count;

    for(int l = 1; l <= length; l++){
        for(int i=0; i <= length - l; i++){
            string sub_str = S.substr(i, l);
            count[sub_str]++;
        }
    }

    cout<<count.size();
}