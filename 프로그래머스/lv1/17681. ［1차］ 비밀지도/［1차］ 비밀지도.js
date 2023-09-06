function solution(n, arr1, arr2) {
    var answer = [];
    
    function binaryNumber(x) {
        let bNum = [];
        while(x>0){
            if(x % 2 == 0) {
                bNum.push(0);
            } else {
                bNum.push(1);
            }
            x = parseInt(x/2);
        }
        while(bNum.length!==n){
            bNum.push(0)
        }
         return bNum.reverse().join('');
    }

    let barr1 = arr1.map(num => binaryNumber(num));
    barr1 = barr1.map((x) => x.toString().split(''))
    let barr2 = arr2.map(num => binaryNumber(num));
    barr2 = barr2.map((x) => x.toString().split(''))

    for(let i = 0; i < n; i++) {
        let result = [];
        for (let j = 0; j < n; j++) {
            if (barr1[i][j] === '1' || barr2[i][j] === '1') {
                result += '#';
            } else {
                result += ' ';
            }
        }
        answer.push(result);
    }

//     // 문자열로 변환
//     let sum_barr2 = sum_barr.map((x) => x.toString().split(''))
    
//     //암호 해독
//     answer = sum_barr2.map((numArray) => 
//         numArray.map((digit) => digit === '0' ? ' ' : '#').join('')
//     );
    
  
    // // 암호 해독
    // answer = sum_barr.map((x) => 
    //     x.toString().split('').map(digit => digit === '0' ? ' ' : '#').join('')
    // );

    // console.log(sum_barr2)
    
    return answer
}