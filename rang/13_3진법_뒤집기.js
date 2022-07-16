// https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
    var answer = 0;

    // 10진법 -> n 진법 number.toString(n)
    var n_3 = n.toString(3).split('');

    // n진법 -> 10진법 Number.parseInt(number, n)
    answer = Number.parseInt(n_3.reverse().join(''), 3);

    return answer;
}

// testcase
console.log(solution(45));
console.log(solution(125));
