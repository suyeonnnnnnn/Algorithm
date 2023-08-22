const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]); // 전체 사람 수 
let [v, last] = input[1].split(" ").map(Number); // 촌수를 계산해야 하는 서로 다른 두 사람의 번호
const m = Number(input[2]); // 부모 자식들 간의 관계의 개수

let visited = Array(n+1).fill(0); 
const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

for(let i = 3; i < 3 + m; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    graph[x][y] = 1;
    graph[y][x] = 1;
}

let count = 0;

function BFS(v) {
    const q = [];
    q.push(v);
    visited[v] = true;

    while(q.length > 0) {
        let size = q.length;
        for(let i = 0; i < size; i++) {
            let node = q.shift();
            if(node == last) {
                console.log(count);
                return;
            }

            for(let j = 1; j <= n; j++) {
                if(graph[node][j] === 1 && visited[j] === 0) {
                    q.push(j);
                    visited[j] = true;
                }
            }
        }
        count++;
    }
    console.log(-1); // 목표 노드에 도착하지 못했을 경우 -1 출력
}
BFS(v);
