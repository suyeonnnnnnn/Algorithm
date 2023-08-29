const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const[n,m] = input[0].split(' ').map(Number);

let ans = [];
let output = '';
// let isused= new Array(10).fill(0);

function func(k) {
    if(k==m) {
       output += `${ans.join(" ")}\n`;
        return;
    } 
    for(let i = 1; i <=n; i++) {
        ans[k] = i;
        func(k+1);
    }
    
}

func(0);
console.log(output);