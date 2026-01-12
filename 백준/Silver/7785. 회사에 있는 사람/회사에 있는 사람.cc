#include <iostream>
#include <map>

using namespace std;

int main() {
    int n;
    cin>>n;

    map<string, bool, greater<>> records;

    while(n--){
        string name, action;
        cin>>name>>action;

        if(action == "enter") records[name] = true;
        else records[name] = false;
    }

    for(auto record:records){
        if(record.second) cout<<record.first<<'\n';
    }
}