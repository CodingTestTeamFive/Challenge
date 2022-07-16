// 문제 설명
// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
// 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.
list = [1, 1, 3, 3, 0, 1, 1]

function solution(num) {
    let answer=[];
    for (let i = 0; i < num.length; i++){
        if(num[i] !== num[i+1]){
            answer.push(num[i]);
        }
    }
    return answer  
}
console.log(solution(list))

// 해결

// 1.답을 담아주는 []을 만들고

// 2.num을 하나 씩 돌렸을 때 num[i]랑 num[i+1]가 다르면 answer에 push 해준다.

// 3.담긴 answer를 출력 해준다.