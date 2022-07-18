// https://school.programmers.co.kr/learn/courses/30/lessons/12906

// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 
// 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
// 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 

// 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 
// solution 함수를 완성해 주세요.

// 제한사항
// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

let 예시배열 = [1, 1, 3, 3, 0, 1, 1]



function solution(arr) {
    let answer = arr.filter((e, i) => {return arr.indexOf(e)===i})
    return answer;
}

// indexOf() 함수는, 배열에서 특정값이 처음으로 나타나는 index를 리턴
// filter() 함수는 특정 조건에 부합하는 배열의 모든 값을 배열 형태로 리턴


// arr.filter(콜백함수)
// 그러니까...
// arr 안의 elements 들을 filter 함수 안의 콜백함수로 전달해서
// 그 함수의 조건과 비교해보고 true 가 리턴된것만 모아서 배열로 리턴하는것


console.log('↓↓ 이거는 solution(arr)')
console.log(solution(예시배열))
console.log()


function anotherSol(arr) {
    let mySet = new Set(arr)
    console.log(mySet)
    let answer = [...mySet]
    for (let item of mySet) console.log(item);
    return answer
}

console.log('↓↓ 이거는 anotherSol(arr)')
console.log(anotherSol(예시배열))

// set = new Set(arr) 매개변수로 들어온 배열을 Set 객체로 만들어서 중복을 제거

// Set 객체 참고해볼 문서
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set


