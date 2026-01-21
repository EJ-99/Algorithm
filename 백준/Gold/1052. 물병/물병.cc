#include <iostream>

using namespace std;

const int MAX = 24;

int countBottles(int n){
    int count = 0;
    for(int i=0; i < MAX; i++){
        if(n & 1 << i) count++;
    }

    return count;
}

int calcMin(int n, int k){
    int added = 0;

    while(true){
        int count = countBottles(n + added);
        if(count <= k) break;

        added++;
    }

    return added;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, k;
    cin>>n>>k;
    cout<<calcMin(n, k);
}
