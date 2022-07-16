// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// <제한사항>
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.

let arr = [5, 9, 7, 10]

function solution(arr, divisor) {
    let answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr.at(i) % divisor === 0) {
            answer.push(arr.at(i));
        }
    }
    if (answer.length === 0) {
        answer.push(-1);
        return answer;
    }answer.sort((a, b) => {return a - b;})
        return answer;
}

// 프로그래머스 채점에는 아직 at() 함수가 적용 되어 있지 않네요 
// 채점할땐 [] 인덱싱으로 바꿔서 채점했더니 잘 돌아 갑니다.

console.log(solution(arr, 5))