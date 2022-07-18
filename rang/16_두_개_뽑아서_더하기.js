// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
    var answer = [];

    // 첫번쨰 풀이 -> 성공
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (i == 0 && j == 1)
                answer.push(numbers[i] + numbers[j]);
            else {
                if (!answer.includes(numbers[i] + numbers[j])) {
                    answer.push(numbers[i] + numbers[j]);
                }
            }
        }
    }

    // 첫번째 풀이 수정
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (!answer.includes(numbers[i] + numbers[j])) {
                answer.push(numbers[i] + numbers[j]);
            }
        }
    }

    // 두번째 풀이
    // Set() 함수 사용
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]);
        }
    }

    // Set() 중복제거 후 배열로 변환
    answer = [...new Set(answer)];

    // sort() 문제 -> 12, 2 비교하면 12가 먼저 출력
    return answer.sort((a, b) => a - b);
}

// testcase
numbers = [
    [2, 1, 3, 4, 1],
    [5, 0, 2, 7]
]

numbers.forEach((item) => console.log(solution(item)))