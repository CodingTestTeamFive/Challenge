// https://school.programmers.co.kr/learn/courses/30/lessons/12982#
// 12 min

function solution(d, budget) {
    var answer = 0;
    var sum = 0;

    d.sort((a, b) => a - b);

    // 성공
    // 첫번째 풀이
    for (let i = 0; i < d.length; i++) {
        if (sum + d[i] <= budget) {
            sum += d[i]
        } else {
            answer = i;
            break;
        }

        if (i === d.length - 1) {
            answer = i + 1;
        }
    }

    // 성공
    // 두번째 풀이
    // if문을 만족하면 answer을 하나씩 더하도록
    for (let i = 0; i < d.length; i++) {
        if (sum + d[i] <= budget) {
            sum += d[i];
            answer++;
        }
    }

    console.log(answer);

    return answer;
}

// testcase
let d = [
    [1, 3, 2, 5, 4],
    [2, 2, 3, 3]
];

let budget = [9, 10];

for (let i = 0; i < d.length; i++) {
    console.log(solution(d[i], budget[i]));
}