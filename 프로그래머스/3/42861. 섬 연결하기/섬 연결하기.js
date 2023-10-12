function solution(n, costs) {
    // 초기화: 각 노드의 부모 노드를 자기 자신으로 설정
    const parent = [];
    for(let i = 0; i < n; i++) {
        parent[i] = i;
    }

    // find 연산
    function find(node) {
        if (parent[node] !== node) {
            parent[node] = find(parent[node]);
        }
        return parent[node];
    }

    // union 연산
    function union(a, b) {
        const rootA = find(a);
        const rootB = find(b);
        
        if (rootA !== rootB) {
            parent[rootB] = rootA;
        }
    }

    // 간선을 비용을 기준으로 오름차순 정렬
    costs.sort((a, b) => a[2] - b[2]);

    let answer = 0;
    let connectedEdges = 0;

    for (const [a, b, cost] of costs) {
        // 두 섬이 연결되어 있지 않으면 연결
        if (find(a) !== find(b)) {
            union(a, b);
            answer += cost;
            connectedEdges += 1;
        }

        // 모든 섬이 연결되면 종료
        if (connectedEdges === n - 1) {
            break;
        }
    }

    return answer;
}
