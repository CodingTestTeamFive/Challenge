// https://school.programmers.co.kr/learn/courses/30/lessons/12926

// 시저 암호

// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.


// function solution(s, n) {
//     var answer = '';
//     // 'a'.charCodeAt() // 97
//     // 'z'.charCodeAt() // 122
//     // String.fromCharCode(97) // 'a'
//     for (let i = 0; i < s.length; i++) {
//         if (s[i]=== 'z') {
//             answer += String.fromCharCode('a'.charCodeAt() + n-1)
//         } else if (s[i] === "Z") {
//             answer += String.fromCharCode('A'.charCodeAt() + n-1)
//         } else if (s[i] === ' ') {
//             answer += ' '
//         } else{
//             answer += String.fromCharCode(s[i].charCodeAt() + n)
//         }
//         // console.log(answer)
//     }
//     return answer;
// }



function solution(s, n) {
    var answer = '';
    // char to ASCII
    // char.charCodeAt(index)
    // char.codePointAt(index)
    // ASCII to char
    // String.fromCharCode(ascii)
    var ascii_change = 0;
    for (let i = 0; i < s.length; i++) {
        ascii_change = s[i].charCodeAt()
        if (s[i] !== ' ') {
            ascii_change += n
            if (s[i] === s[i].toLowerCase()) {
                if (ascii_change > 'z'.charCodeAt()) {
                    ascii_change -= 26;
                }
            } else if (s[i] === s[i].toUpperCase()) {
                if (ascii_change > 'Z'.charCodeAt()) {
                    ascii_change -= 26;
                }
            }
        }
        answer += String.fromCharCode(ascii_change);
    }
    return answer;
}


console.log(solution('abcde', 1))
console.log(solution('ab de', 1))
console.log(solution('AB DZR', 1))
console.log(solution('zzz', 1))
console.log(solution('yyy', 24))
console.log(solution('wwwxxx', 24))