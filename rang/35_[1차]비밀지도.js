// https://school.programmers.co.kr/learn/courses/30/lessons/17681
// 45 min

function solution(n, arr1, arr2) {
    var answer = [];

    for (let i = 0; i < n; i++) {
        answer.push((arr1[i] | arr2[i]).toString(2));
    }

    for (let i = 0; i < n; i++) {
        let tmp = '';

        if (answer[i].length !== n) {
            // testcase 3, 4 통과 못함
            // 부족한 자릿수 채워지지 않는 문제
            answer[i] = (n - answer[i].length) * '0' + answer[i];

            // 성공
            answer[i] = '0'.repeat(n-answer[i].length) + answer[i];
        }

        for (let j=0; j<answer[i].length; j++) {
            tmp = answer[i][j] === '1' ? tmp + '#' : tmp + ' ';
        }
        answer[i] = tmp;
    }

    return answer;
}

let n = [5, 6, 4, 5]

let arr1 = [
    [9, 20, 28, 18, 11],
    [46, 33, 33, 22, 31, 50],
    [0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

let arr2 = [
    [30, 1, 21, 17, 28],
    [27, 56, 19, 14, 14, 10],
    [0, 0, 0, 0],
    [30, 1, 21, 17, 28]
]

for (let i = 0; i < n.length; i++) {
    console.log(solution(n[i], arr1[i], arr2[i]));
}
