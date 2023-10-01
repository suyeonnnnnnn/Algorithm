function solution(number, k) {
    var answer = '';

    let array = [];

    for(let i = 0; i < number.length; i++) {
       
        while (k > 0 && array[array.length - 1] < number[i]) {
        // 마지막 원소가 현재보다 작으면 
            k--;
            array.pop();
        
        }
         array.push(number[i]);
    }
    
    while (k > 0) {
        array.pop();
        k--;
    }
    // console.log(array)
    answer = array.join('');
    return answer;
}