// https://school.programmers.co.kr/learn/courses/30/lessons/42748
// 7 min

function solution(array, commands) {
    var answer = [];

    // 성공
    // 첫번째 풀이
    for (let i = 0; i < commands.length; i++) {
        answer.push(array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[commands[i][2] - 1]);
    }

    // 참고한 풀이
    // map() 사용
    commands.map((item) => {
        answer.push(array.slice(item[0] - 1, item[1]).sort((a, b) => a - b)[item[2] - 1]);
    });

    return answer;
}

// testcase
let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3]
];

console.log(solution(array, commands));
