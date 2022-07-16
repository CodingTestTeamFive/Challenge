// https://school.programmers.co.kr/learn/courses/30/lessons/68644

// 정수 배열 numbers가 주어집니다.
// numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는
// 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.

let 정수배열 = [5, 3, 2, 6, 8];

function solution(numbers) {
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j) {
                let result = numbers[i] + numbers[j];
                arr.push(result);
            }
        }
    }
    const answer = [...new Set(arr)].sort((a, b) => a - b);
    return answer;
}

console.log(solution(정수배열));
