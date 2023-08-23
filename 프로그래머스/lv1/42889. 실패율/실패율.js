function solution(N, stages) {
    var answer = [];
    let failure;
    // let num1_count = stages.filter(e => 4 === e).length;
    // console.log(num1_count);
    let count_arr = [];
    count_arr.push(0);
    let failure_arr = [];
    // failure_arr.push(0);
    
    //1번스테이지
    let count = stages.filter(e => 1 === e).length;
    count_arr.push(count);
    failure = Number(count_arr[1]/stages.length);
    failure_arr.push(failure);
    
    let a = count_arr[1];
    let b = stages.length;
    
//     for(let i = 2; i <= N; i++) {
//         let count = stages.filter(e => i === e).length;
//         count_arr.push(count);

//         b = b-a;
//         a = count_arr[i];
        
//         failure = Number(a/b);
        
//         failure_arr.push(failure);
//     }
        for(let i = 2; i <= N; i++) {
        let count = stages.filter(e => i === e).length;
        count_arr.push(count);
        b = b-a;
        a = count_arr[i];
        if(b == 0) {
            failure = 0;
        }else{
        failure = Number(a/b);}
        
        failure_arr.push(failure);
    }
    console.log(failure_arr);
    

    while(answer.length !== N) {
        let max_value = Math.max(...failure_arr);
        let findIndex = failure_arr.findIndex((num) => num == max_value);
        failure_arr[findIndex] = -1;
        answer.push(findIndex+1);
    }

    return answer;
}