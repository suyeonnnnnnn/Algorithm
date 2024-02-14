function solution(food) {
    var answer = [];
    let array = [];
    for(let i = 1; i < food.length; i++) {
            for(let j = 0; j < Math.floor(food[i]/2); j++) {
                answer.push(i)
                // console.log(i)
            }

    }
    array = [...answer].reverse();
    array = array.join('');
    // console.log(array)
    answer.push(0);
    answer = answer.join('');
    answer = answer + array;
  console.log(answer)
    return answer;
}