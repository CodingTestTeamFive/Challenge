// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
    var answer = [];


    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i], divisor);
        // arr.at(i) == arr[i] -> 같은 문법, 새로 update된 문법, python indexing 가능(ㅁarr[-1])
        if (arr[i] % divisor == 0) {
            answer.push(arr[i]);
        }
    }

    if (answer.length == 0) {
        answer.push(-1)
    }

    answer.sort(function(a, b) {
        return a-b;
    });

    return answer;
}

// testcase
arr = [
    [5, 9, 7, 10],
    [2, 36, 1, 3],
    [3, 2, 6],
]
divisor = [
    5, 1, 10
]

for (let i = 0; i < arr.length; i++) {
    console.log(solution(arr[i], divisor[i]));
}