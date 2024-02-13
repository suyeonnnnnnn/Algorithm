function solution(answers) {
    var answer = [];
    let one = [];
    let two = [];
    let three = [];
    let count1 = 0;
    let count2 = 0; 
    let count3 = 0;
    
    for(let i = 0; i < answers.length/5; i++) {
        one.push(1,2,3,4,5);
    }
    
    for(let i = 0; i < answers.length/8; i++) {
        two.push(2,1,2,3,2,4,2,5);
    }
    
    for(let i = 0; i < answers.length/10; i++) {
        three.push(3,3,1,1,2,2,4,4,5,5);
    }
    
    for(let i = 0; i < one.length; i++) {
        if(one[i]==answers[i]) count1++;
    }
    for(let i = 0; i < two.length; i++) {
        if(two[i]==answers[i]) count2++;
    }
    for(let i = 0; i < three.length; i++) {
        if(three[i]==answers[i]) count3++;
    }

    if(count1 > count2 && count1 > count3) answer.push(1);
    else if (count2 > count1 && count2 > count3) answer.push(2);
    else if (count3 > count2 && count3 > count1) answer.push(3);
    else if (count1 == count2 && count1 > count3) answer.push(1,2);
    else if (count2 == count3 && count2 > count1) answer.push(2,3);
    else if (count1 == count3 && count1 > count2) answer.push(1,3);
    else if (count1 == count2 && count2 == count3) answer.push(1,2,3);
    return answer;
}