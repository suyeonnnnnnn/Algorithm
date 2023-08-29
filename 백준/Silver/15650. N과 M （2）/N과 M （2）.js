const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const[n,m] = input[0].split(' ').map(Number);  //false로 채워줌 

let answer = [];
isused = new Array(10).fill(0);

function func(st, k){
    if(k == m) {
        console.log(answer.join(" "));
        return;
    } else {
        for(let i = st; i <=n; i++) {
            if(!isused[i]) {
                answer[k] = i;
                isused[i] = 1;
                func(i+1, k+1);
                isused[i] = 0
            }
        }
    }
}

func(1, 0);