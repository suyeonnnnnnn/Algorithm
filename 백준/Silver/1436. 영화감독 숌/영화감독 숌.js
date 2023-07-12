let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
const N = Number(input);


let ans, cnt, temp;

  
  ans = 0; // 영화 제목
  cnt = 0; // 현재 몇번째 종말의 수인지

  while (cnt != N) {
    ans++;
    temp = ans;

    // 수에 6이 적어도 3개 이상 들어가는지 판별
    while (temp != 0) {
      if (temp % 1000 == 666) { // 종말의 숫자라면
        cnt++;
        break;
      } else {
        temp = Math.floor(temp / 10); // 일의 자리수 삭제
      }
    }
  }

  console.log(ans);
  
