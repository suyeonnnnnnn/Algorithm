function solution(numbers) {
    var answer = [];
    let newNumbers = [...new Set(numbers)];

    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]);
        }
    }
    answer = [...new Set(answer)];
    return answer.sort((a, b) => a-b);
}