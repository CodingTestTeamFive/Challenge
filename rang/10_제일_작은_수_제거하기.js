// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
    // var answer = [];

    // Math.min(...arr) == Math.min.apply(Math, arr);
    var min = Math.min(...arr);

    arr.splice(arr.indexOf(min), 1);

    if (arr.length == 0) {
        arr.push(-1);
    }

    // filter 사용 -> 최소값만 삭제
    // arr.filter((item) => item > m);

    return arr;
}

// testcase
arr = [
    [4, 3, 2, 1],
    [10],
    [1, 2]
]

arr.forEach((item) => console.log(solution(item)));

navigator.geolocation.getCurrentPosition()