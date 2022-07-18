// https://programmers.co.kr/learn/courses/30/lessons/12947

// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 1 이상, 10000 이하인 정수입니다.

// function solution(x) {
//     if (x % sumOfDigits(x) ===0){
//         return `${x}의 모든 자릿수의 합은 ${sumOfDigits(x)}입니다. ${x}은 ${sumOfDigits(x)}로 나누어 떨어지므로 ${x}은 하샤드 수입니다.`
//     } else {
//         return `${x}의 모든 자릿수의 합은 ${sumOfDigits(x)}입니다. ${x}은 ${sumOfDigits(x)}로 나누어 떨어지지 않으므로 ${x}은 하샤드 수가 아닙니다..`
//     }
// }

function solution(x) {
    if (x % sumOfDigits(x) ===0){
        return true
    } else {
        return false
    }
}


function sumOfDigits(n){
    let answer = (String(n).split("").map(element => parseInt(element))).reduce((x, y) => {return x + y})
    return answer
}



console.log(sumOfDigits(18))
console.log()


console.log(solution(18))
console.log(solution(158))

console.log()
console.log()

// 신기하게 짠 코드... 이게 한줄로 되네?
function Harshad(n){
    return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}


console.log(Harshad(10))
console.log(Harshad(11))