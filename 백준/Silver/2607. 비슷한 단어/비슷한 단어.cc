#include <iostream>
#include <vector>

using namespace std;

vector<int> getCount(string w){
    vector<int> result(26, 0);

    for(int i=0; i<w.length(); i++){
        result[w[i] - 'A']++;
    }

    return result;
}

bool isSimilar(string w1, string w2){
    int diff = 0;

    vector<int> count1 = getCount(w1);
    vector<int> count2 = getCount(w2);

    for(int i=0; i<26; i++){
        diff += abs(count1[i] - count2[i]);
    }

    if(diff > 2 || diff == 2 && w1.length() != w2.length()) return false;
    return true;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, answer = 0;
    string word, input;

    cin>>n>>word;

    for(int i=1; i<n; i++){
        cin>>input;

        if(isSimilar(word, input)) {
            answer++;
        }
    }

    cout<<answer;
}
