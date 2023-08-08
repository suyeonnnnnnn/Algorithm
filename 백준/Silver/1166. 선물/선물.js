const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');


const[N,L,W,H] = input[0].split(' ').map(Number);


let start = 0;
let end  = 1000000000;

for(let i = 0; i < 10000; i++) {
    let mid = (start+end)/2;
    if (Math.floor(L / mid) * Math.floor(W / mid) * Math.floor(H / mid) >= N) start = mid;
    else end = mid;//상자에 넣을 수 없다면
}

console.log(end);
