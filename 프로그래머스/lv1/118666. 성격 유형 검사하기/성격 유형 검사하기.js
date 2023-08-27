function solution(survey, choices) {
    var answer = '';
    let score = [];
    let answer2= [];
    let score_num = [];
    // let R=0; let T=0; let C=0; let F=0; let J=0; let M=0; let A=0; let N=0;
    
    for(let i = 0; i < choices.length; i++) {
        if(choices[i] <= 3) {
            for(let j = 0; j < 4-choices[i]; j++) {
                score.push(survey[i].slice(0,1));
            }
            
        }
        else if (choices[i] > 4 && choices[i] <= 7) {
            for(let j = 0; j <choices[i]-4; j++) {
                score.push(survey[i].slice(1,2));
            }
        }
        else continue;
    }
    console.log(score);
    
    
    let R = score.filter(e => 'R' === e).length;
    let T = score.filter(e => 'T' === e).length;
    let C = score.filter(e => 'C' === e).length;
    let F = score.filter(e => 'F' === e).length;
    let J = score.filter(e => 'J' === e).length;
    let M = score.filter(e => 'M' === e).length;
    let A = score.filter(e => 'A' === e).length;
    let N = score.filter(e => 'N' === e).length;

    if(R>=T) answer2.push("R"); else answer2.push("T");
    if(C>=F) answer2.push("C"); else answer2.push("F");
    if(J>=M) answer2.push("J"); else answer2.push("M");
    if(A>=N) answer2.push("A"); else answer2.push("N");
    
    console.log(answer2)
    answer = answer2.join("");
    return answer;
}