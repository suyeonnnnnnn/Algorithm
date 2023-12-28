function solution(d, budget) {
    var answer = 0;
    
    d.sort((a, b) => a-b);
    console.log(d);
    let sum = 0;
    let count = 0;
    
    for(let i = 0; i < d.length; i++) {
        if(sum + d[i] > budget) {
            break;
        } else {
            sum += d[i];
            count++;
        }
    
    }
    answer = count;
    return answer;
    
}