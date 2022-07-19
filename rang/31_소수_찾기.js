// https://school.programmers.co.kr/learn/courses/30/lessons/12921
// 6 min

function solution(n) {
    var answer = 0;

    // 성공
    // 첫번째 풀이
    for (let i = 2; i <= n; i++) {
        if (is_prime(i)) {
            answer++;
        }
    }


    // 참고한 풀이
    // Set()을 활용 -> 더 빠름
    // array -> 정확성 테스트 통과 실패
    const s = new Set()
    // 홀수만 입력
    for (let i = 3; i <= n; i += 2) {
        s.add(i);
    }
    s.add(2);

    for (let i = 3; i <= Math.sqrt(n); i++) {
        if (s.has(i)) {
            // i의 배수 삭제
            for (let j = i * 2; j <= n; j += i) {
                s.delete(j);
            }
        }
    }

    answer = s.size;

    return answer;
}

function is_prime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

// testcase
console.log(solution(10));
console.log(solution(5));
