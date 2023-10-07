function solution(x) {
    var answer = true;
    
    let new_x = x.toString()
    // console.log(x)
    let array = new_x.split('').map(Number);
    let sum = 0;
    
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    
    // let sum = parseInt(array[0]) + parseInt(array[1]);
    console.log(sum)
    if(x%sum == 0) answer = true;
    
    else answer = false;
    // console.log(array)
    return answer;
}