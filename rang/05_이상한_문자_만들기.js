// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
    var answer = '';

    // 첫번째 풀이 -> 문제 잘못 이해
    // for (let i = 0; i < s.length; i++) {
    //     if (i % 2 == 0) {
    //         answer += s[i].toUpperCase();
    //     } else {
    //         answer += s[i]
    //     }
    // }

    // 두번쨰 풀이 -> map 함수를 잘못 적용    
    // var s_list = s.split(' ');

    // s_list.map((_, j) => {
    //     s_list[j].map((element, i) => {
    //         if (i % 2 == 0) {
    //             return element.toUpperCase();
    //         }
    //     })
    // });

    // return answer;

    // 못 품 -> 정답 구글링 map return을 안했던 문제
    var string = s.split(' ').map((item) => {
        var word = item.split('').map((element, index) => {
            return index % 2 == 0 ? element.toUpperCase() : element.toLowerCase();
        })
        return word.join('');
    })
    return string.join(' ');
}

// testcase
console.log(solution("try hello world"));
console.log(solution("what are you doing?"));