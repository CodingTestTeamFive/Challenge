// https://school.programmers.co.kr/learn/courses/30/lessons/12940
// 15 min

function solution(n, m) {
    var answer = [];

    // 성공
    // 첫번째 풀이
    var gcd = 0; // 최대공약수

    for (let i = 0; i <= n; i++) {
        if (n % i === 0 && m % i === 0) {
            gcd = i;
        }
    }

    // 최소공배수 = 최대공약수 * 서로소(최대공약수로 나눈 값)
    answer.push(gcd, (n / gcd) * (m / gcd) * gcd);


    // 두번째 풀이
    // 유클리드 알고리즘
    var gcd_num = gcd(n, m);

    answer.push(gcd_num, (n / gcd_num) * (m / gcd_num) * gcd_num);

    return answer;
}

// 유클리드 알고리즘
function gcd(a, b) {
    console.log(a, b);
    return b ? gcd(b, a % b) : a;
}

console.log(gcd(12, 6));
console.log(gcd(3, 12));

// testcase
console.log(solution(3, 12));
console.log(solution(2, 5));
console.log(solution(6, 16));