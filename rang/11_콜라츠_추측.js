// https://school.programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
    var answer = 0;

    while (num != 1) {
        num = num % 2 == 0 ? num / 2 : num * 3 + 1;
        answer++;

        if (answer == 500) {
            answer = -1;
            break;
        }

        // console.log(answer, num);
    }

    return answer;
}

// testcase
console.log(solution(1));
console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
