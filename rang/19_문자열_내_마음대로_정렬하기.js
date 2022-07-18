// https://school.programmers.co.kr/learn/courses/30/lessons/12915
// 20 min

function solution(strings, n) {
    var answer = [];

    // 성공
    // 첫번쨰 풀이
    for (let i = 0; i < strings.length; i++) {
        strings[i] = strings[i][n] + strings[i];
    }

    strings.sort();
    strings.forEach((item) => answer.push(item.slice(1)));
    

    // 참고한 풀이
    // replace(a, b) -> a를 b로 변경, 첫번째 a만 변경
    strings.forEach((item) => answer.push(item.replace(item[0], '')));

    return answer;
}

// testcase
let strings = [
    ["sun", "bed", "car"],
    ["abce", "abcd", "cdx"]
];

let n = [
    1, 2
];

for (let i = 0; i < n.length; i++) {
    console.log(solution(strings[i], n[i]))
}
