#include <iostream>
#include <vector>

using namespace std;

int findKthNum(int n, int k){
    vector<bool> is_erased(n+1, true);
    int count = 0;


    for(int i = 2; i <= n; i++){
        if(!is_erased[i]) continue;

        for(int j = i; j <= n; j += i){
            if(!is_erased[j]) continue;

            if(++count == k) return j;

            is_erased[j] = false;
        }
    }

    return 1;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, k;
    cin>>n>>k;

    cout<<findKthNum(n, k);
}