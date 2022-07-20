// https://school.programmers.co.kr/learn/courses/30/lessons/12917

// 문자열 내림차순으로 배치하기

// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, 
// solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.

function solution(s) {
    let answer = s.split("").sort().reverse().join("")
    return answer;
}


// 이걸론 겨우 2점밖에 못얻었다.
// 쉬운문제라 원래 배점이 낮은가?


console.log(solution('Zbcdefg'));



// 다른 사람의 풀이를 보자
function anotherSolution(s) {
    var answer = Array.from(s).sort().toString().replace(/,/g,'');
    return answer;
}

// Array.from(arrayLike[, mapFn[, thisArg]])    반환값은 새로운 Array 인스턴스
// arrayLike 배열로 변환하고자 하는유사 배열 객체나 반복 가능한 객체.
// 

// .replace('숫자','*') , 제거