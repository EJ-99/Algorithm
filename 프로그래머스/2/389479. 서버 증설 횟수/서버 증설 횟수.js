function solution(players, m, k) {
    let idx = 0;
    const servers = [];
    
    for(let time = 0; time < 24; time++){
        if(servers[idx] && servers[idx][0] + k === time) idx++;
        
        const visitor_count = players[time];
        const server_count = servers.reduce((acc, cur, i)=>{
            if(i < idx) return acc;
            return acc + cur[1];
        }, 0);
        
        if(visitor_count < m * (server_count + 1)) continue;
        
        const added_count = Math.floor((visitor_count - (server_count + 1) * m) / m) + 1;
        //console.log(time, added_count);
        servers.push([time, added_count]);
    }
    
    return servers.reduce((acc, cur) => acc + cur[1], 0);
}

// servers : 증설된 서버 정보([증설 시각, 개수]) 관리 배열
// 서버 추가할 때마다 차례로 push
// idx : 유효한 서버 중 가장 먼저 증설된 서버를 가리키는 인덱스
// 반환할 때마다 idx 증가
// 유효한 서버 리스트 = servers[idx] ~ servers[servers.length - 1]