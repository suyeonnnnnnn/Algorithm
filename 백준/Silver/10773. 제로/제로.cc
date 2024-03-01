#include <bits/stdc++.h>
using namespace std;

stack<int> s;
int ans = 0;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int K;
	cin >> K;
	

	while (K--) {
		int n;
		cin >> n;
		if (n == 0) s.pop();
		else s.push(n);
	}

	while (!s.empty()){
		ans += s.top();
		s.pop();
	}
    cout << ans;
}