#include <iostream>
#include <queue>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, num;
    cin>>n;

    priority_queue<int> max_heap; // 중간값보다 같거나 작은 값들 저장
    priority_queue<int, vector<int>, greater<int>> min_heap; // 중간값보다 큰 값들 저장

    while(n--) {
        cin >> num;

        if(!min_heap.empty() && num > min_heap.top()){
            min_heap.push(num);
        }
        else{
            max_heap.push(num);
        }

        if(max_heap.size() < min_heap.size()){
            max_heap.push(min_heap.top());
            min_heap.pop();
        }
        else if(max_heap.size() > min_heap.size() + 1){
            min_heap.push(max_heap.top());
            max_heap.pop();
        }

        cout<<max_heap.top()<<'\n';
    }

}
