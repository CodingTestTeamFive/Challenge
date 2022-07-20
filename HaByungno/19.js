// https://school.programmers.co.kr/learn/courses/30/lessons/12915

// 문자열 내 마음대로 정렬하기

// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 
// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
// 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 
// 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// 제한 조건
// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

let 예시문자열배열 = ["sun", "bed", "car"]

function solution(strings, n) {
    let answer = strings.sort((a,b)=>{
        if(a[n] > b[n]) {
            return 1;
        } else if (a[n] < b[n]) {
            return -1;
        } else {
            if (a>b) return 1;
            if (a<b) return -1;
        }
    })
    return answer;
}

console.log(solution(예시문자열배열, 1))

// sort() 구문
// arr.sort([compareFunction])
// compareFunction =    정렬 순서를 정의하는 함수. 
//                      생략하면 배열은 각 요소의 문자열 변환에 따라 
//                      각 문자의 유니 코드 코드 포인트 값에 따라 정렬됨.


// 따라서 compare 함수의 형식은 다음과 같다.

// function compare(a, b) {
//     if (a is less than b by some ordering criterion) {
//       return -1;
//     }
//     if (a is greater than b by the ordering criterion) {
//       return 1;
//     }
//     // a must be equal to b
//     return 0;
//   }


console.log("a".charCodeAt())
console.log("b".charCodeAt())
console.log('a'<'b')
console.log('a'>'b')