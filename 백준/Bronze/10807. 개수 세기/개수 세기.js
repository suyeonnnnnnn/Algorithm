const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input[0]);
let number = [];
let count = 0;

for(let i = 0; i < n; i++) {
    number.push(Number(input[1].split(' ')[i]));
}

const v = Number(input[2]);

for(let i = 0; i < n; i++) {
    if (number[i] === v) count++;
}

console.log(count);


