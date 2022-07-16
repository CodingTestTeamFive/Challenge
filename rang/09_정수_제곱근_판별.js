function solution(n) {
    var answer = 0;

    // 첫번째 풀이
    if (Number.isInteger(n ** 0.5)) {
        answer = (n ** 0.5 + 1) ** 2;
    } else {
        answer = -1;
    }

    // 두번째 풀이
    // 제곱근 구하기 -> Math.sqrt(16) -> 4
    // 제곱하기 -> Math.pow(2, 3) -> 2***3
    var n_sqrt = Math.sqrt(n);
    if (Number.isInteger(n_sqrt)) {
        answer = Math.pow(n_sqrt+1, 2);
    } else {
        answer = -1;
    }

    return answer;
}

// testcase
console.log(solution(121));
console.log(solution(3));