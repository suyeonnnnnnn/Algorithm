function solution(n)
{
    var answer = 0;
    let a;

    a = String(n).split('').map(Number); // 숫자를 문자열로 변환 후 한자리씩 배열 원소로
    console.log(a);

    for(let i = 0; i < a.length; i++) {
        answer += a[i];
    }
    
    return answer;
}