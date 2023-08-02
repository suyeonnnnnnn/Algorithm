const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input[0]); //계단 개수

let s = [];
let d = [];
let result=0;

s.push(Number(0));
for (let i = 1; i <= n + 1 ; i++) {
    s.push(Number(input[i]));
}

// 2차원 배열 d를 0으로 초기화
for (let i = 0; i <= n + 1; i++) {
    d.push([0, 0]);
}

d[1][1] = s[1];
d[1][2] = 0;
d[2][1] = s[2];
d[2][2] = s[1]+s[2];

for(let i = 3; i <= n; i++) {
    d[i][1] = Math.max(d[i-2][1],d[i-2][2])+s[i];
    d[i][2] = d[i-1][1]+s[i];
}

result = Math.max(d[n][1],d[n][2])
console.log(result);