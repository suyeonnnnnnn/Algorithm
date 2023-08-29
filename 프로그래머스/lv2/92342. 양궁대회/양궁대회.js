let bestResult = [];
let maxDiff = -1;

function calcScore(info, lion) {
    let apeach = 0, lionScore = 0;

    for (let i = 0; i < 11; i++) {
        if (lion[i] > info[i]) {
            lionScore += (10 - i);
        } else if (info[i] > 0) {
            apeach += (10 - i);
        }
    }
    return lionScore - apeach;
}

function cmp(a, b) {
    for (let i = 0; i < 11; i++) {
        if (a[i] !== b[i]) {
            return a[i] > b[i];
        }
    }
    return false;
}

function backtracking(idx, arrowsLeft, lion, info) {
    if (idx === 11) {
        const diff = calcScore(info, lion);
        if (diff <= 0) return;

        if (diff > maxDiff || (diff === maxDiff && cmp(lion, bestResult))) {
            bestResult = [...lion];
            maxDiff = diff;
        }
        return;
    }

    for (let i = 0; i <= arrowsLeft; i++) {
        lion[idx] = i > info[idx] ? i : info[idx] + 1;
        backtracking(idx + 1, arrowsLeft - lion[idx], lion, info);
    }
}

function solution(n, info) {
    const lion = Array(11).fill(0);
    backtracking(0, n, lion, info);

    if (maxDiff === -1) return [-1];
    return bestResult;
}