// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    var answer = true;

    var sum = 0;
    var x_str = x.toString().split('');

    x_str.forEach((item) => sum += parseInt(item));

    if (x % sum != 0) {
        answer = false;
    }

    return answer;
}

// testcase
console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
