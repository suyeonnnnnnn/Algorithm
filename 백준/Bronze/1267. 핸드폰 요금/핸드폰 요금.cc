#include <iostream>
using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int n, Y=0, M=0;
	int array[20];
	cin >> n;

	for (int i = 0; i < n; i++) {
		cin >> array[i];
	}

	for (int i = 0; i < n; i++) {
		Y += ((array[i] / 30) + 1) * 10;
	}

	for (int i = 0; i < n; i++) {
		M += ((array[i] / 60) + 1) * 15;
	}
	if (Y < M) cout << "Y " << Y;
	else if (Y > M) cout << "M " << M;
	else cout << "Y M " << Y;
}