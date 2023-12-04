function solution(left, right) {
    var answer = 0;
    
    function func(num) {
        let count = 0;
        for(let i = 0; i < num; i++) {
            if(num % i == 0) count++;
        }
        return count;
    }
    
    for(let i = left; i <= right; i++) {
        if(func(i) % 2 == 0) answer += i;
        else answer -= i;
    }
    
    return Math.abs(answer);
}