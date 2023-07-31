const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

function reverse (i,j) {
    for(let k = i; k < i+3; k++) {
        for(let l = j; l < j+3; l++) {
            if(A[k][l] === 0) A[k][l] = 1;
            else A[k][l] = 0;
        }
    }
}

let [n, m] = input.shift().split(" ").map(Number);
let A = [];
let B = [];
let count = 0;

for(let i = 0; i < n; i++) {
       A.push(input[i].split('').map(Number));
}

for(let i = n; i < n*2; i++) {
    B.push(input[i].split('').map(Number));
}

for(let i = 0; i < n-2; i++) {
    for(let j = 0; j < m-2; j++) {
        if(A[i][j] !== B[i][j]) {
            reverse(i, j);
            count++
        }
    }
}

for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        if(A[i][j] !== B[i][j]) {
            count = -1;
            break;
        }
    }
}

console.log(count);
