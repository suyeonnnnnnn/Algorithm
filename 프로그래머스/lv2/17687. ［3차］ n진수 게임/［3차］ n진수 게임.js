function solution(n, t, m, p) {
    var answer = '';
    let str="";
    
    for(let i = 0; i < t*m; i++) {
        str += i.toString(n).toUpperCase();
    }
    

    for(let i = 0; i < t; i++) {
    answer += str[p - 1 + i * m];
}
    return answer;
}