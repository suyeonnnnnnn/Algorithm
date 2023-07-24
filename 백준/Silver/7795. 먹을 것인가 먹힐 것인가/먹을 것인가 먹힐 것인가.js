const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let count = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] < target) {
            left = mid + 1;
            count = mid + 1; // 배열에서 target보다 작은 요소의 개수를 저장
        } else {
            right = mid - 1;
        }
    }

    return count;
}

const t = Number(input[0]);
let inputIndex = 1;

for (let i = 0; i < t; i++) {
    const [n, m] = input[inputIndex++].split(' ').map(Number);
    const a_arr = input[inputIndex++].split(' ').map(Number);
    const b_arr = input[inputIndex++].split(' ').map(Number);

    a_arr.sort((a, b) => a - b);
    b_arr.sort((a, b) => a - b);

    let cnt = 0;

    for (let k = 0; k < n; k++) {
        // 배열 B에서 배열 A의 각 요소보다 작은 요소들의 개수를 세서 cnt에 더해줍니다.
        cnt += binarySearch(b_arr, a_arr[k]);
    }

    console.log(cnt);
}