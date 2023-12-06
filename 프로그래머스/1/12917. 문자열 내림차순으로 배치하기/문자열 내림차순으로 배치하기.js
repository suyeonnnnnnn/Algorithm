function solution(s) {
    var answer = '';
    let newS = s.split('');

    answer = newS.sort().reverse().join("");
    // console.log(newS);
    return answer;
}