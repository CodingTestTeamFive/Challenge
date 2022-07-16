function solution(n) {
    const repeatCount = Math.floor(n/2);
    const answer = "수박".repeat(repeatCount);
    if (n % 2)return answer + "수"
    return answer;
}