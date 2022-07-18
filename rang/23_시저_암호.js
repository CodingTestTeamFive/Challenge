// https://school.programmers.co.kr/learn/courses/30/lessons/12926
// 50 min

function solution(s, n) {
    var answer = '';

    // char to ASCII
    // char.charCodeAt(index)
    // char.codePointAt(index)

    // ASCII to char
    // String.fromCharCode(ascii)

    var ascii_change = 0;

    for (let i = 0; i < s.length; i++) {
        // if (s[i].indexOf(' ') >= 0)      // 같은 표현
        
        // 성공
        // 첫번째 풀이
        if (s[i] === ' ') {
            ascii_change = s[i].charCodeAt()
        } else if (s[i] === s[i].toLowerCase()) {
            ascii_change = s[i].charCodeAt() + n
            if (ascii_change > 'z'.charCodeAt()) {
                ascii_change -= 26;
            }
        } else if (s[i] === s[i].toUpperCase()) {
            ascii_change = s[i].charCodeAt() + n
            if (ascii_change > 'Z'.charCodeAt()) {
                ascii_change -= 26;
            }
        }

        // 성공
        // 두번째 풀이
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

// testcase
let s = ["AB", "z", "a B z"];
let n = [1, 1, 4]

for (let i = 0; i < s.length; i++) {
    console.log(solution(s[i], n[i]));
}
