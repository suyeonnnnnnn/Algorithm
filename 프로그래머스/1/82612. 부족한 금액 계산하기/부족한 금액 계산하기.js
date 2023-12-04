function solution(price, money, count) {
    var answer = -1;
    let sum = 0;
    
    for(let i = 1; i <=count; i++) {
        sum += price*i;
    }
    
    if(sum > money) answer = sum-money;
    else answer = 0;

    return answer;
}