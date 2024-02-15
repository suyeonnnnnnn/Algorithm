function solution(t, p) {
    var answer = 0;
    let array = [];
    
    for (let i = 0; i < t.length-p.length+1; i++) {
        array.push(t.substr(i, p.length));
    }
    for(let i = 0; i < array.length; i++) {
        if(array[i] <= p) answer++;
    }
    console.log(array)
    return answer;
}