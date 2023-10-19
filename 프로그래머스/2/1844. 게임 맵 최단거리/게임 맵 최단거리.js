function solution(maps) {
    var answer = 0;
    
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    
    const n = maps.length;
    const m = maps[0].length;
    
    const dist = Array.from({ length: n }, () => Array(m).fill(-1));
    const Q = [];
    Q.push({ x: 0, y: 0 });
    dist[0][0] = 0;
    
    while(Q.length > 0) {
        let cur = Q.shift();
        for(let i = 0; i < 4; i++) {
            let nx = cur.x + dx[i];
            let ny = cur.y + dy[i];
            
            if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if(dist[nx][ny] >= 0 || maps[nx][ny] !== 1) continue;
            
            dist[nx][ny] = dist[cur.x][cur.y] + 1;
            Q.push({ x: nx, y: ny });
        }
    }
    
    return dist[n-1][m-1] === -1 ? -1 : dist[n-1][m-1] + 1;
}