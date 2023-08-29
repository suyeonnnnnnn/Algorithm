function solution(n, info) {
    let ret = Array(11).fill(-1);
    let arrow = Array(11).fill(0);
    let maxScore = -Infinity;

    function compare(a, b) {
        for(let i = 10; i >= 0; i--) {
            if(a[i] !== b[i]) return a[i] > b[i];
        }
        return false;
    }

    function bt(idx, left) {
        if(idx === 10) {
            arrow[idx] = left;
            let score = 0;
            for(let i = 0; i <= 10; i++) {
                if(arrow[i] > info[i]) {
                    score += 10-i;
                } else if(info[i] > 0 && info[i] >= arrow[i]) {
                    score -= 10-i;
                }
            }
            if(score > 0 && (score > maxScore || (score === maxScore && compare(arrow, ret)))) {
                maxScore = score;
                ret = [...arrow];
            }
            return;
        }
        for(let i = 0; i <= left; i++) {
            arrow[idx] = i;
            bt(idx+1, left-i);
        }
    }

    bt(0, n);

    if(ret[0] === -1 || maxScore <= 0) return [-1];
    return ret;
}