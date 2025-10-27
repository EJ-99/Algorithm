function solution(info, n, m) {
    const INF = 120;
    let answer = INF;
    let length = info.length;
    
    const dp = Array(length + 1).fill(0).map(_ => Array(m).fill(INF));
    
    dp[0][0] = 0;
    
    for(let i=1; i<=length; i++){
        const a = info[i-1][0], b = info[i-1][1];
        for(let j=0; j<m; j++){
            dp[i][j] = Math.min(dp[i-1][j] + a, dp[i][j]);
            
            if(j+b < m){
                dp[i][j+b] = Math.min(dp[i-1][j], dp[i][j+b]);
            }
        }
    }
    
    for(let i=0; i<m; i++){
        answer = Math.min(answer, dp[length][i]);
    }
    
    if(answer >= n) answer = -1;
    
    return answer;
}

// dp[i][j] : 도둑 A가 남긴 흔적의 개수
// i : 훔친 물건의 총 개수
// j : 도둑 B가 남긴 흔적의 개수

// 가능한 경우
// a, b: i번째 물건을 훔칠 때 A, B가 남기는 흔적의 개수

// 1. 도둑 A가 훔친 경우
// dp[i][j] = min(dp[i-1][j] + a, dp[i][j])

// 2. 도둑 B가 훔친 경우
// A가 남긴 흔적의 개수는 i-1번째 물건을 훔칠 때 남긴 흔적과 동일
// dp[i][j+b] = min(dp[i-1][j], dp[i][j+b])
