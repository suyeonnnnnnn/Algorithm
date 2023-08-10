const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const[n,m] = input[0].split(' ').map(Number);  //false로 채워줌 

let n_arr = input[1].split(' ').map(Number); // 1 7 8 9
let ans = [];
let isused = new Array(10).fill(0);

function func(num,k) {
    if(k === m) {// m개를 모두 택했으면
            console.log(ans.join(' '));
        return;
    }
    
    for(let i = num; i< n; i++) {// 1부터 n까지의 수에 대해
        if(!isused[i]) {// 아직 i가 사용되지 않았으면
            ans[k] = n_arr[i];// k번째 수를 i로 정함
            isused[i] = 1;// i를 사용되었다고 표시 (true)
            func(i+1,k+1);// 다음 수를 정하러 한 단계 더 들어감
            isused[i] = 0;// k번째 수를 i로 정한 모든 경우에 대해 다 확인했으니 i를 이제 사용되지않았다고 명시함. (false)
        }
    }
}

n_arr.sort((a, b) => a-b);
func(0,0);
