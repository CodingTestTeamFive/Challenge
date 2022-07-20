function solution(nums) {
                            // 예시 [1,2,3,4]
    answer = 0;

    for (let i = 0; i < nums.length - 2; i++) {                 
        for (let j = i + 1; j < nums.length - 1; j++) {        
            for (let k = j + 1; k < nums.length; k++) {
                console.log(`${nums[i]} + ${nums[j]} + ${nums[k]} = ${nums[i] + nums[j] + nums[k]}`)
                if (isPrime(nums[i] + nums[j] + nums[k])) {
                    answer++;
                }
            }
        }
    }
    return answer;
}

// 소수 판별 함수
function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log(`${n}는 소수가 아니다`)
            return false;
        }
    }
    console.log(`${n}는 소수이다`)
    return true;
}

let 예시 = [1, 2, 3, 4];
// 출력되야 할 답 = 1

console.log("답", solution(예시));
