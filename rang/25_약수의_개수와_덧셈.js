// https://school.programmers.co.kr/learn/courses/30/lessons/77884
// 5 min

function solution(left, right) {
    var answer = 0;

    // 성공
    // 첫번째 풀이
    for (let i = left; i <= right; i++) {
        let num = 0;
        for (let j = 0; j <= Math.sqrt(i); j++) {
            console.log(i, j)
            if (i % j === 0) {
                if (j ** 2 === i) {
                    num += 1;
                } else {
                    num += 2;
                }
            }
        }

        if (num % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }


    // 참고한 풀이
    // n의 제곱은 약수가 홀수개 = 제곱근이 정수면 약수가 홀수개
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }

    return answer;
}

// testcase
let left = [13, 24];
let right = [17, 27];

for (let i = 0; i < left.length; i++) {
    console.log(solution(left[i], right[i]));
}