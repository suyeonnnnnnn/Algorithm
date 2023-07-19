const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input[0].split(' ')[0]);
let k = Number(input[0].split(' ')[1]);

let coin = []; 
let cnt = 0;
for(let i = 1; i <= n; i++) coin.push(Number(input[i]));
coin.sort((a, b) => b - a); // 내림차순 정렬

for(let i = 0; i <n ; i++) {
        cnt += Math.floor(k/coin[i]);
        k = k%coin[i];
}

console.log(cnt);