// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
    var answer = [arr[0]];

    // 첫번째 풀이 -> 성공
    let i = 0;
    while (i < arr.length - 1) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                i++;
            } else {
                answer.push(arr[j]);
                i = j;
                break;
            }
        }
    }

    // 참고한 코드
    // answer 마지막 값과 배열의 값을 비교해 같지 않다면 answer에 추가
    // for (let i = 0; i < arr.length; i++) {
    //     if (answer[answer.length - 1] !== arr[i]) {
    //         answer.push(arr[i]);
    //     }
    // }

    // js -> 배열 마지막 값으로 undefined가 있어서 length+1에 접근 가능
    answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            answer.push(arr[i]);
        }
    }

    answer = [...new Set(arr)];
    

    // array.filter()를 사용해 표현할 수 있다.
    // 비교하는 값 != 그 다음 값 -> answer에 추가
    // answer = [];
    // answer = arr.filter((item, index) => item != arr[index + 1]);
    // answer = arr.filter((item, index) => arr.indexOf(item) === index)


    return answer;
}

// testcase
arr = [
    [1, 1, 3, 3, 0, 1, 1],
    [4, 4, 4, 3, 3]
];

arr.forEach((item) => console.log(solution(item)))