#include <iostream>
#include <vector>
#include <queue>

using namespace std;

struct info {
    int order;
    int line;
    int work_days;
    int urgency;
};

struct comp{
    bool operator()(const info &child, const info &parent){
        if(child.work_days != parent.work_days){
            return child.work_days < parent.work_days;
        }

        if(child.urgency != parent.urgency){
            return child.urgency < parent.urgency;
        }

        return child.line > parent.line;
    }
};

int getOrder(int idx, int m, vector<queue<info>> &input){
    int result = 0;
    priority_queue<info, vector<info>, comp> pq;

    for(int i=1; i<=m; i++) {
        if(!input[i].empty()){
            pq.push(input[i].front());
            input[i].pop();
        }
    }

    while(true){
        if(pq.top().order == idx) break;
        int line = pq.top().line;
        pq.pop();

        if(!input[line].empty()){
            pq.push(input[line].front());
            input[line].pop();
        }

        result++;
    }

    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, m, k;
    cin>>n>>m>>k;

    vector<queue<info>> input(m + 1);

    for(int i=1; i<=n; i++){
        int d, h, line;
        cin>>d>>h;
        line = i % m > 0 ? i % m : m;
        input[line].push({
            order : i,
            line: line,
            work_days: d,
            urgency: h
        });
    }

    cout<<getOrder(k+1, m, input);
}
