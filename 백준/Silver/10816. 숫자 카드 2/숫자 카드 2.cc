#include <iostream>
#include <algorithm>
using namespace std;

int n,m;
int a[5000001];
int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    sort(a, a+n);
    cin >> m;
    while(m--) {
       int t;
        cin >> t;
        cout << upper_bound(a, a+n, t)-lower_bound(a, a+n, t) << '\n';
    }
}