function solution(num) {
    var answer = 0;
    let count = 0;
    
    while(num !== 1 && count < 500) {
        if(num % 2 == 0) {
            num = num/2;
            count++;
        }
        else if(num % 2 !== 0) {
            num = num * 3 + 1;
            count++;
        }
    }
    
    if(count >= 500) count = -1;
    
    return count;
}