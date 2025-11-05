function solution(diffs, times, limit) {
    let left = 0, right = 100000;
    
    while(left <= right){
        const mid = Math.ceil((left + right) / 2);
        const time = calcTime(diffs, times, mid);
        
        
        if(time > limit || time === -1) left = mid + 1;
        else right = mid - 1;
        
    }
        
    return left;
}

function calcTime(diffs, times, level) {
    if(level - diffs[0] < 0) return -1;
    
    let result = times[0];
    const n = diffs.length;
    
    for(let i=1; i<n; i++){
        const time_cur = times[i], time_prev = times[i-1];
        const diff = diffs[i];
        
        if(level - diff < 0) {
            result += (diff - level) * (time_cur + time_prev);
        }
        
        result += time_cur;
    }
    
    return result;
}