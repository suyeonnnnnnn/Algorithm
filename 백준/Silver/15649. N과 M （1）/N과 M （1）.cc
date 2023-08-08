#include <iostream>
using namespace std;

int n, m;
int a[10];
bool isused[10];

void func(int k) {
    if(k == m) {
       for(int i = 0; i < m; i++) {
           cout << a[i] << ' ';
       }
        cout << '\n';
       return;
    }
    for(int i = 1; i <= n; i++ ){
        if(!isused[i]) {
            a[k] = i;
            isused[i] = 1;
            func(k+1);
            isused[i] = 0;
        }
    }
        
}

int main() {
    cin >> n >> m;
    func(0);
    
}