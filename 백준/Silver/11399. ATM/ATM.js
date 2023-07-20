// 12334
// 1 3 6 9 13

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

const N = Number(input[0]);

let time = [];

for(let i = 0; i < N; i++) time.push(Number(input[1].split(' ')[i]));

time.sort((a, b) => a - b);

let sum = [0];
let result = 0;
//sum.push(Number(0));


for(let i = 0; i < N; i++) {
    sum[i+1] = sum[i] + time[i];
}

result = sum.reduce((a, b) => (a + b));

console.log(result);