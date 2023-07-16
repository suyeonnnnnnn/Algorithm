const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

const n = Number(input[0]);
const num1 = input[1].split(' ');
const m = Number(input[2]);
const num2 = input[3].split(' ');

let num1Map = new Map();
let answer = []

for (let x of num1) {
    if (num1Map.has(x)) num1Map.set(x, num1Map.get(x) + 1);
    else num1Map.set(x, 1);
  }

for (let x of num2) {
    if (num1Map.has(x)) answer.push(num1Map.get(x));
    else answer.push(0);
}

console.log(answer.join(" "));