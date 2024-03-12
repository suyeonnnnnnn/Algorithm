#include <iostream>
#include <queue>
using namespace std;

int main(void) {
	int n;
	cin >> n;

	queue<int>Q;
	for (int i = 1; i <= n; i++) {
		Q.push(i);
	}
	
	while (Q.size() > 1) {
		Q.pop();
		Q.push(Q.front());
		Q.pop();
	}
	cout << Q.front();
}