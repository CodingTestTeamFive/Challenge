// https://school.programmers.co.kr/learn/courses/30/lessons/12928#
// 30분

function solution(n) {
    var answer = 0;

    // 성공
    // 첫번째 풀이
    var nums = [];

    for (let i = 0; i <= Math.sqrt(n); i++) {
        if (n % i === 0 && !nums.includes(i)) {
            if (i ** 2 === n) {
                nums.push(i);
                answer += i;
            } else {
                nums.push(i, n / i);
                answer += i + n / i;
            }
        }
    }

    // 성공
    // 두번째 풀이 -> 더 빠름
    for (let i = 0; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i ** 2 === n) {
                answer += i;
            } else {
                answer += i + n / i;
            }
        }
    }

    return answer;
}

// testcase
console.log(solution(12));
console.log(solution(5));

console.log(solution(0));
console.log(solution(1));
console.log(solution(2));
console.log(solution(16));