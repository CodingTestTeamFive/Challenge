// https://school.programmers.co.kr/learn/courses/30/lessons/12921

// 소수찾기

// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.

// 접근법?
// 먼저 소수를 찾고
// 1부터 n까지 반복 돌리면서 센다

// 소수가 뭐냐? 소수는 1보다 큰 자연수 중 1과 자기 자신만을 약수로 가지는 수!

// 2,3,5,7 까지는 10이내의 소수이고, 그 외 2,3,5,7의 배수가 제외.
// 그렇게 반복적으로 다음 소수의 배수인 것도 제외가 되는 셈

function solution(n) {
    var cnt = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrimeNumber(i)) {
            cnt++;
        }
    }
    // console.log(n, cnt)
    return cnt;
}


// 소수 찾기 함수
function isPrimeNumber(n) {
    // if (n === 1) return false; // 1은 당연히 소수가 아니니까 n이 1이면 바로 false 리턴
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // 2부터 반복문 시작 n까지
        if (n % i === 0) return false; // 다 나눠보는데 나눠떨어지는게 있으면 false 리턴
    }
    return true; // 위 조건에 만족하지 않는다면 소수
}

// console.log(isPrimeNumber(10))

// 숫자를 2부터 숫자의 제곱근까지 나눠봐서 하나라도 나뉘어 떨어지는지 확인하면 됩니다.
// 끝까지 나누지 않고 제곱근까지 나눠도 소수를 판별할 수 있는 이유는
// 숫자의 약수는 숫자의 제곱근 범위에 존재하기 때문입니다.
// 예시로 숫자가 12일 때 2 x 6, 3 x 4, 4 x 3, 6 x 2로 표현되고
// 몫이 커지면 나누는 값이 작아지거나, 나누는 값이 커지면 몫이 작아지는 반비례 관계입니다.
// 즉, 제곱근까지 나누어보면 이후에는 몫과 나누는 값이 반대로 바뀌는 경우밖에 없으므로
// 굳이 나누어보지 않아도 됩니다.

console.log(solution(10)); // 4
// console.log(solution(100)); // 4
