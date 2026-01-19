#include <iostream>
#include <vector>

using namespace std;

const int MAX = 1000000;

vector<bool> getPrimes(int num){
    vector<bool> result(num + 1, true);
    result[0] = false;
    result[1] = false;

    for(int i=2; i*i<=num; i++){
        if(!result[i]) continue;

        for(int j=i*i; j<=num; j+=i){
            result[j] = false;
        }
    }

    return result;
}

int verify(int num, vector<bool> &is_prime){
    for(int i=3; i<=num/2; i+=2){
        int a = i;
        int b = num - a;

        if(is_prime[a] && is_prime[b]){
            return a;
        }
    }

    return 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    vector<bool> is_prime = getPrimes(MAX);

    while(true){
        cin>>n;
        if(n == 0) break;

        int a = verify(n, is_prime);

        if(a != 0){
            cout<<n<<" = "<<a<<" + "<<n - a<<"\n";
        }
        else{
            cout<<"Goldbach's conjecture is wrong.\n";
        }
    }
}