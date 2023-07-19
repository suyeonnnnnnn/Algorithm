const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input[0]); // 로프 개수
let weight = []; //로프가 버틸 수 있는 최대 중량

for(let i = 1; i <= n; i++) weight.push(Number(input[i]));

let result = 0;
let sum = 0;

weight.sort((a, b) => b - a); // 내림차순 정렬

for(let i = 0; i < n; i++) {
    sum = weight[i] * (i+1);
    if(sum > result) result = sum;
}

console.log(result);