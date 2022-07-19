// https://school.programmers.co.kr/learn/courses/30/lessons/87389#
// 4 min

function solution(n) {
    var answer = 0;

    // 성공
    // 첫번째 풀이
    for (let i = n; i >= 1; i--) {
        if (n % i === 1) {
            answer = i;
        }
    }

    // 참고한 풀이
    // 가장 작은 수를 구하니까 i를 작은 수부터 1씩 더하는게 빠르다.
    // 그리고 가장 작은 값을 구하면 break로 반복문을 빠져나간다.
    for (let i = 1; i <= n; i++) {
        if (n % i === 1) {
            answer = i;
            break;
        }
    }


    return answer;
}

// testcase
console.log(solution(10));
console.log(solution(12));
