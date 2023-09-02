function solution(n) {
    var answer = 0;
    let Max = 1000000;
    
    for(let i = 1; i <= Max; i++) {
        if(n%i == 1) {
            console.log(i)
            return i;
            
        }
    }
    // return answer;
}