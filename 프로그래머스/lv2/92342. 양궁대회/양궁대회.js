function solution(n, info) {
    // 라이언이 가장 큰 점수 차이로 이길 수 있는 화살의 경우와 그 점수 차이를 저장할 배열
    // mn[0..10]: 각 점에서 라이언이 얼마나 많은 화살을 쐈는지, mn[11]: 점수 차이
    let mn = new Array(12).fill(-1);
    
    // 백트래킹으로 가능한 모든 경우의 수를 탐색할 때 사용할 화살 배열
    let arrow = new Array(12).fill(0);

    // a와 b 배열을 비교하여, a 배열이 더 큰 값을 가지면 true 반환
    function cmp(a, b) {
        for (let i = 11; i >= 0; i--)
            if (a[i] !== b[i]) return a[i] > b[i];
        return false;
    }

    // idx는 현재 화살을 배치하려는 인덱스, left는 사용하지 않은 화살의 수
    function bt(idx, left) {
        if (idx === 10) { // 마지막 인덱스까지 도달했으면
            arrow[idx] = left; // 남아있는 화살을 모두 해당 위치에 배치

            // 라이언과 어피치의 점수 차이를 계산
            let score = 0;
            for (let i = 0; i <= 10; i++) {
                if (arrow[i] > info[i])
                    score += (10 - i);
                else if (info[i] !== 0)
                    score -= (10 - i);
            }

            // 점수가 0보다 작거나 같으면 라이언이 이길 수 없으므로 반환
            if (score <= 0) return;

            arrow[11] = score;

            // 현재 화살 배치가 이전에 찾은 것보다 더 좋은지 비교하고, 더 좋다면 mn을 갱신
            if (cmp(arrow, mn)) {
                for (let i = 0; i < 12; i++)
                    mn[i] = arrow[i];
            }
            return;
        }

        // 현재 위치에 화살을 배치하는 모든 경우를 고려
        for (let i = 0; i <= left; i++) {
            arrow[idx] = i; 
            bt(idx + 1, left - i);
        }
    }

    bt(0, n);

    // 만약 어떠한 경우도 라이언이 이길 수 없다면 [-1] 반환
    if (mn[0] === -1) return [-1];

    // 아니라면 가장 좋은 화살 배치 결과를 반환
    let ret = mn.slice(0, 11);
    return ret;
}
