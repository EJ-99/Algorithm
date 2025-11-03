function solution(storage, requests) {
    storage = storage.map(str => str.split('')).map(arr => {
        arr.unshift('');
        arr.push('');
        return arr;
    });
    storage.push(storage[0].map(_ => ''));
    storage.unshift(storage[0].map(_ => ''));
    
    requests.forEach(request => {
        if(request.length === 2) findAll(storage, request[0]);
        else findOutside(storage, request);
    });
    
    return countContainer(storage);
}

// 지게차
function findOutside(storage, target){
    const n = storage.length, m = storage[0].length;
    const visited = [...storage].map(arr => arr.map(v => false));
    const queue = [];
    const dr = [0, 0, 1, -1];
    const dc = [1, -1, 0, 0];
    
    queue.push([0, 0]);
    visited[0][0] = true;
    
    while(queue.length !== 0){
        const [cr, cc] = queue[0];
        queue.shift();
        
        if(storage[cr][cc]){
            if(storage[cr][cc] === target) storage[cr][cc] = '';
            continue;
        }
        
        for(let i=0; i<4; i++){
            const nr = cr + dr[i];
            const nc = cc + dc[i];
            if(nr < 0 || nc < 0 || nr >= n || nc >= m) continue;
            if(!visited[nr][nc]){
                queue.push([nr, nc]);
                visited[nr][nc] = true;
            }
        }
    }
}


// 크레인
function findAll(storage, target){
    const n = storage.length, m = storage[0].length;
    for(let i=1; i<n; i++){
        for(let j=1; j<m; j++){
            if(storage[i][j] === target) storage[i][j] = '';
        }
    }
}

function countContainer(storage){
    const result = storage.reduce((acc, arr) => {
        const count = arr.filter(char => char !== '').length;
        return acc + count;
    }, 0);
    
    return result;
}


