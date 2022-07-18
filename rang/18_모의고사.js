// https://school.programmers.co.kr/learn/courses/30/lessons/42840
// 30 min

function solution(answers) {
    var answer = [];

    var count = [0, 0, 0];
    let stu_rule = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];

    // 성공
    // 첫번째 방법
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === stu_rule[0][i % 5]) count[0]++;
        if (answers[i] === stu_rule[1][i % 8]) count[1]++;
        if (answers[i] === stu_rule[2][i % 10]) count[2]++;
    }

    // console.log(count);

    for (let i = 0; i < count.length; i++) {
        if (count[i] === Math.max(...count)) {
            answer.push(i + 1)
        }
    }


    // 성공
    // 참고한 풀이
    // filter() 사용
    // count[0] = answers.filter((item, index) => item === stu_rule[0][index%5]).length;
    // count[1] = answers.filter((item, index) => item === stu_rule[1][index%8]).length;
    // count[2] = answers.filter((item, index) => item === stu_rule[2][index%10]).length;

    for (let i = 0; i < answers.length; i++) {
        count[i] = answers.filter((item, index) => item === stu_rule[i][index % stu_rule[i].length]).length;
    }

    count.filter((item, index) => {
        if (item === Math.max(...count)) {
            answer.push(index + 1)
        }
    })

    return answer;
}

// testcase
let answers = [
    [1, 2, 3, 4, 5],
    [1, 3, 2, 4, 2]
];

answers.forEach((item) => console.log(solution(item)));
