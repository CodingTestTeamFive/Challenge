// https://programmers.co.kr/learn/courses/30/lessons/12934

// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.

function solution(n) {
    let root = Math.sqrt(n);
    if (Number.isInteger(root)) {
        let answer = (root + 1) ** 2;
        return answer;
    } else {
        return -1;
    }
}

console.log(solution(4));
console.log(solution(81));
console.log(solution(47380592));

// 거듭제곱
// Math.pow([대상 숫자], [거듭제곱 횟수]);
// 제곱근
// Math.sqrt([대상 숫자]);

// 한번쯤 눈여겨볼 다른방식 코드
function nextSqaure(n) {
    switch (n % Math.sqrt(n)) {
        case 0:
            return Math.pow(Math.sqrt(n) + 1, 2);
        default:
            return -1;
    }
}

// Switch, case, default, break 문법
switch (expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
    // code block
}
