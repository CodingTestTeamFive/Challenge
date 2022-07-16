// https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    var answer = 0;
    var n_list = n.toString().split('');

    // sort((a, b) => {return a-b}) -> 오름차순
    // sort((a, b) => {return b-a}) -> 내림차순
    // sort 내부에서 버블정렬로 a, b의 값을 비교

    // reverse() -> 유니코드만 반영, 제대로 안나오는 것 정리 필요
    n_list = n_list.sort().reverse();
    answer = parseInt(n_list.join(''));

    return answer;
}

// testcase
console.log(solution(118372));
