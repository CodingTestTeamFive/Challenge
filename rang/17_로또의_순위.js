// https://school.programmers.co.kr/learn/courses/30/lessons/77484#
// 35 min

function solution(lottos, win_nums) {
    var answer = [];

    // 첫번째 풀이
    var count = 0;
    var count_0 = 0;

    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] == 0) {
            count_0++;
        } else if (win_nums.includes(lottos[i])) {
            count++;
        }
    }

    // answer에 순위를 넣고 정렬
    // answer.push(7 - count, 7 - (count + count_0));
    // answer.sort((a, b) => a - b);

    answer.push(7 - (count + count_0), 7 - count);

    // answer 값이 0, 7일때 실행
    if (answer.includes(0) || answer.includes(7)) {
        for (let i = 0; i < answer.length; i++) {
            if (answer[i] === 0) answer[i]++;
            if (answer[i] > 6) answer[i]--;
        }
    }


    // 참고한 풀이
    // filter()를 사용
    var rank = [6, 6, 5, 4, 3, 2, 1];

    var count = lottos.filter((item) => win_nums.includes(item)).length;
    var count_0 = lottos.filter((item) => item === 0).length;

    answer.push(rank[count+count_0], rank[count]);

    return answer;
}

// testcase
let lottos = [
    [44, 1, 0, 0, 31, 25],
    [0, 0, 0, 0, 0, 0],
    [45, 4, 35, 20, 3, 9],
    [7, 8, 9, 10, 11, 12]
];

let win_nums = [
    [31, 10, 45, 1, 6, 19],
    [38, 19, 20, 40, 15, 25],
    [20, 9, 3, 45, 4, 35],
    [1, 2, 3, 4, 5, 6]
];

for (let i = 0; i < lottos.length; i++) {
    console.log(solution(lottos[i], win_nums[i]));
    console.log('----')
}