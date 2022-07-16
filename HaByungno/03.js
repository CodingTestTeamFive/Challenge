// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.

function solution(n) {
    let answer = "";
    const subak = "수박";
    if (n % 2 === 1) {
        answer = subak.repeat(n + 1).substring(0, n);
    } else if (n % 2 === 0) {
        answer = subak.repeat(n + 2).substring(0, n);
    }
    return answer;
}


console.log(solution(5))
console.log(solution(6))
console.log(solution(3))
console.log(solution(4))
console.log(solution(1))
console.log(solution(10))
console.log(solution(15))