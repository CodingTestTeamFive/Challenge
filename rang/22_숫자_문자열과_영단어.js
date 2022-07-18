// https://school.programmers.co.kr/learn/courses/30/lessons/81301
// 50 min

function solution(s) {
    var word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    // 정확성 테스트 실패
    // 첫번째 풀이
    for (let i = 0; i < word.length; i++) {
        s = s.replace(word[i], i.toString())
    }

    // 성공
    // 두번쨰 풀이
    // s에 문자가 없을때까지 while 돌림

    while (s.replace(/[^a-z]/g, '')) {
        for (let i = 0; i < word.length; i++) {
            s = s.replace(word[i], i.toString())
        }
    }

    // 참고한 풀이
    // 이중 반복문 필요없이 split으로 포함하는 값을 전부 나눈 뒤 합쳐줌.
    for (let i = 0; i < word.length; i++) {
        let s_split = s.split(word[i]);
        s = s_split.join(i);
    }

    return Number(s);
}

// testcase
s = [
    "one4seveneight",
    "23four5six7",
    "2three45sixseven",
    "123",
    "one3one2five9fivefivefive"
]

s.forEach((item) => console.log(solution(item)));
