function solution(seoul) {
    var answer = '';
    let x;
    
    for(let i = 0; i < seoul.length; i++) {
        if(seoul[i] == "Kim") x = i;
    }
    // console.log(x)
    answer = "김서방은 " + x + "에 있다"
    console.log(answer);
    return answer;
}