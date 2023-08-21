const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
   
let [N, M, V] = input[0].split(' ').map(Number); // N, M, V 값을 받아옴.
const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

let visited = Array(N+1).fill(0); // 방문 정보를 저장할 배열을 초기화합니다.
const DFS_answer = [];
const BFS_answer = [];

for (let i = 1; i <= M; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    graph[a][b] = 1;
    graph[b][a] = 1;
  }

  function reset() {
    for(let i = 1; i <= N; i++) {
        visited[i] = 0;
    }
  }

  function DFS(V) {
    visited[V] = true;
    DFS_answer.push(V);

    for(let i = 1; i <= N; i++) {
        if(graph[V][i] == 1 && visited[i] == 0) { // 현재 정점과 연결되어있고 방문되지 않았으면
            DFS(i);
        }
    }
  }

  function BFS(V) {
    const q = [];
    q.push(V);
    visited[V] = true;
    BFS_answer.push(V);

    while(q.length > 0) {
        V = q.shift();
        for(let i = 1; i <= N; i++) {
            if(graph[V][i] == 1 && visited[i] == 0) { // 현재 정점과 연결되어있고 방문되지 않았으면
                q.push(i);
                visited[i] = true;
                BFS_answer.push(i);
            }
        }
    }
  }

  DFS(V);
  reset();
  BFS(V);

  console.log(DFS_answer.join(" "));
  console.log(BFS_answer.join(" "));