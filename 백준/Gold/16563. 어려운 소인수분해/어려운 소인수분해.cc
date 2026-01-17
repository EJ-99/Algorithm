#include <iostream>
#include <vector>

using namespace std;

const int MAX = 5000000;

vector<int> getPrimes(int range){
    vector<int>primes(range + 1, 0);

    for(int i=2; i*i<=range; i++){
        if(primes[i]) continue;

        for(int j=i*i; j<=range; j+=i){
            if(primes[j]) continue;
            primes[j] = i;
        }
    }

    return primes;
}

vector<int> getPrimeFactors(int k, vector<int> &primes){
    vector<int> factors;

    while(primes[k]){
        factors.push_back(primes[k]);
        k = k / primes[k];
    }
    factors.push_back(k);
    return factors;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, k;
    cin>>n;

    vector<int> primes = getPrimes(MAX);

    while(n--){
        cin>>k;
        vector<int> answer = getPrimeFactors(k, primes);

        for(int i=0; i<answer.size(); i++){
            cout<<answer[i]<<' ';
        }
        cout<<'\n';
    }
}