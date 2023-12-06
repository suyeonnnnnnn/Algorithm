function solution(s) {
    let words = s.split(" ");
    let answer = [];

    for (let word of words) {
        let convertedWord = "";
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                convertedWord += word[i].toUpperCase();
            } else {
                convertedWord += word[i].toLowerCase();
            }
        }
        answer.push(convertedWord);
    }

    return answer.join(" ");
}
