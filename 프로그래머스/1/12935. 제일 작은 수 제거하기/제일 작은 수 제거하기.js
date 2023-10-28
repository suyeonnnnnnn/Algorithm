function solution(arr) {
    if (arr.length <= 1) return [-1];

    let min = Math.min(...arr);
    let answer = arr.filter(num => num !== min);

    return answer.length === 0 ? [-1] : answer;
}