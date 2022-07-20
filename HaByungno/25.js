// https://school.programmers.co.kr/learn/courses/30/lessons/77884

// 약수의 개수와 덧셈

// 두 정수 left와 right가 매개변수로 주어집니다.
// left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ left ≤ right ≤ 1,000

// left	right	result
// 13	17	    43
// 24	27	    52

// 주어지는 숫자 사이에 약수들의 개수를 판별해서 
// 짝수개면 해당 수를 더하고 홀수개면 해당 수를 빼면된다.

function solution(left, right) {
    let answer = 0;
    
    for (let i = left; i <= right; i++) {
        let cnt = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                cnt += 1;
            }
        }
        //cnt 개수에 따라 덧셈 뺄셈
        answer = cnt % 2 === 0 ? (answer += i) : (answer -= i);
    }

    return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));
