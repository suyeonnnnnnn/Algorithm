const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const[n,m] = input[0].split(' ').map(Number);

let a = [];
let isused = new Array(10).fill(0);

function func(k) {
    if(k === m) {
        console.log(a.join(' '));
        return;
    }

    for(let i = 1; i<= n; i++) {
        if(!isused[i]) {
            a[k] = i;
            isused[i] = 1;
            func(k+1);
            isused[i] = 0;
        }
    }
}

func(0);


