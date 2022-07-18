// https://school.programmers.co.kr/learn/courses/30/lessons/12917?language=javascript
// 15 min

function solution(s) {
    var answer = '';

    // 성공
    // 첫번째 풀이
    var lower = [];
    var upper = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            upper.push(s[i]);
        } else {
            lower.push(s[i]);
        }
    }

    answer = lower.sort().reverse().join('') + upper.sort().reverse().join('');

    // 성공
    // 참고한 풀이
    // sort()는 오름차순 -> 대문자가 소문자보다 우선순위
    // 그대로 reverse() 하면 된다.
    answer = s.split('').sort().reverse().join('');

    return answer;
}

// testcase
console.log(solution('Zbcdefg'));
