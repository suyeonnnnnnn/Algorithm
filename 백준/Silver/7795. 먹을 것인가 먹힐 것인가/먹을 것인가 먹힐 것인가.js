const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const t = Number(input[0]);

let inputIndex = 1; // Start index for reading test cases

for (let i = 0; i < t; i++) {
    const [a, b] = input[inputIndex++].split(' ').map(Number); // Parse a and b
    const a_arr = input[inputIndex++].split(' ').map(Number); // Parse array A elements
    const b_arr = input[inputIndex++].split(' ').map(Number); // Parse array B elements

    a_arr.sort((a, b) => a - b);
    b_arr.sort((a, b) => a - b);

    let cnt = 0;

    for (let k = 0; k < a; k++) {
        for (let s = 0; s < b; s++) {
            if (a_arr[k] > b_arr[s]) cnt++;
        }
    }

    console.log(cnt);
}