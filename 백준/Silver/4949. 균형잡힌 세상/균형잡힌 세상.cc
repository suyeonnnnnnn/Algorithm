#include <iostream> 
#include <stack>
#include <string>
using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	while (true) {
		string a;
		getline(cin, a);
		if (a == ".") break;
		stack<char> s;
		bool isvalid = true;
		for (auto c : a) {
			if (c == '(' || c == '[') s.push(c);
			else if (c == ')') {
				if (s.empty() || s.top() != '(') {
					isvalid = false;
					break;
				}
				s.pop();
			}
			else if (c == ']') {
				if (s.empty() || s.top() != '[') {
					isvalid = false;
					break;
				}
				s.pop();
			}
		}
		if (!s.empty()) isvalid = false;
		if (isvalid) cout << "yes\n";
		else cout << "no\n";
	}
}

