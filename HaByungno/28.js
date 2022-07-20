// https://school.programmers.co.kr/learn/courses/30/lessons/12940

// 최대공약수와 최소공배수

// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로
// solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.

// 입출력 예
// |n	|m	|return|
// |---|---|---|
// |3	|12	|[3, 12]
// |2	|5	|[1, 10]


// 최대공약수 구하는법
// 최대공배수 구하는법

function solution(n, m) {

    // 두 숫자 중 뭐가 더 큰지 판별
    let bNum = Math.max(n, m);
    let sNum = Math.min(n, m);

    let numDiv = 1; // 1은 모든 자연수의 약수

    // 최대공약수 , 최대 공배수 구하기
    for (let i = bNum; i > 1; --i) {     // 내가 이걸 처음에 왜;;; 조건은 i>2로 걸었는지 알수가 없네;;
        if (bNum % i === 0 && sNum % i === 0) {
            bNum /= i;
            sNum /= i;
            numDiv = i;    
            console.log(bNum, sNum, numDiv);

            return [numDiv, bNum*sNum*numDiv]
        } 
        // if (bNum % i !== 0 && sNum % i !== 0 || bNum % i !== 0 && sNum % i === 0 || bNum % i === 0 && sNum % i !== 0){
        //     bNum = n
        //     sNum = m
        //     numDiv = 1;
        //     return [numDiv, bNum*sNum*numDiv]
        // }
    }
    // console.log(bNum, sNum, numDiv);

    // let commonDivsor = numDiv
    // let commonMultiple = bNum * sNum * numDiv
    // let answer = [commonDivsor, commonMultiple];

    return [numDiv, n*m];
}

console.log(solution(3,12))


// // 코드 정리한것
// function solution(n, m) {
//     // 두 숫자 중 뭐가 더 큰지 판별
//     let bNum = Math.max(n, m);
//     let sNum = Math.min(n, m);
//     let numDiv = 1;     // 1은 모든 수의 약수

//     // 최대공약수 , 최대 공배수 구하기
//     for (let i = bNum; i > 1; --i) {
//         if (bNum % i === 0 && sNum % i === 0) {
//             bNum /= i;
//             sNum /= i;
//             numDiv = i;    
//             return [numDiv, bNum*sNum*numDiv] // [최대공약수, 최대공배수]
//         } 
//     }
//     return [numDiv, n*m];  // 동일하게 나눠 떨어지는 숫자가 없으면 그냥 1이 최대 공약수이고 두수 m n을 곱한 값이 최소공배수이다.
// }


// console.log(solution(60000, 48283));      // [ 12, 240 ]
// console.log(solution(3, 12));    // [ 3, 12 ]
// console.log(solution(2, 5));     // [ 1, 10 ]


// 유클리드 호제법????????
// a > b 일 때, 
// a % b = r(나머지)
// b % r = r2
// r % r2 = r3 
// ...
// ...
// ... 
// 나머지가 0이 될 때 까지 반복
// 이때 나머지를 0으로 만든 나눈 수가 최대 공약수가 된다.


function anotherSolution(n, m) {

    // 최대공약수 함수 
    const gcd = (a,b) => {
        if (b === 0) { // 나머지가 0이 되면 나눈 수를 반환.
            return a
        }
        return gcd(b, a % b) // 나머지가 0이 아니면 재귀로 함수를 실행한다.
    }
    // 최소 공배수 함수
    const lcm = (a,b) => (a * b) / gcd(a, b);
    
    return [gcd[n,m],lcm(n,m)]

}



// /// 와우;
function gcdlcm(a, b) {
    var r;
    for(var ab= a*b; r = a % b; a = b, b = r){}
    return [b, ab/b];
}

// true/false 조건을 (r=a%b) 로 판별하였네요 0이 나오면 for문이 종료되게 됩니다.. 
// 말이 안나오네요 진짜 천재..


// for ([initialization]; [condition]; [final-expression]){
//     statement
// }


// initialization - 식(할당식 포함) 또는 변수 선언. 주로 카운터 변수를 초기화할 때 사용
//                  var 키워드로 선언한 변수는 반복문에 제한되지 않습니다. 
//                  즉 for 문과 같은 범위에 위치합니다. 
//                  let 키워드로 선언한 변수는 반복문의 지역 변수가 됩니다.

// condition - 매 반복마다 평가할 식. 평가 결과가 참이라면 statement를 실행합니다. 
//             이 식을 넣지 않았을 때 계산 결과는 언제나 참이 됩니다. 
//             계산 결과가 거짓이라면 for 문의 바로 다음 식으로 건너 뜁니다.

// final-expression - 매 반복 후 평가할 식. 다음번 condition 평가 이전에 발생합니다. 
//                    주로 카운터 변수를 증감하거나 바꿀 때 사용합니다.

// statement - 조건의 평가 결과가 참일 때 실행하는 문. 
//             여러 문을 반복 실행하려면 블럭문({ ... })으로 묶어야 합니다. 
//             아무것도 실행하지 않으려면 공백문 (;)을 사용하세요.

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for#%EA%B5%AC%EB%AC%B8