// https://school.programmers.co.kr/learn/courses/30/lessons/12939
// 8 min

function solution(s) {
    var answer = '';

    let arr = s.split(' ').map((item) => parseInt(item));
    arr.sort((a, b) => a - b);

    // console.log(arr);

    answer = `${arr[0]} ${arr[arr.length - 1]}`

    return answer;
}

let s = [
    "1 2 3 4",
    "-1 -2 -3 -4",
    "-1 -1"
]

s.forEach((item) => console.log(solution(item)));
