function solution(nums) {
    let len = nums.length,
        answer = 0;

    for (let i = 0; i < len - 2; i++) {
        console.log(nums[i])
        for (let j = i + 1; j < len - 1; j++) {
            console.log(nums[j])
            for (let k = j + 1; k < len; k++) {
                console.log(nums[k])
                if (isPrime(nums[i] + nums[j] + nums[k])) {
                    answer++;
                }
            }
        }
    }
    return answer;
}

const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};


let 예시 = [1, 2, 3, 4];
// 출력되야 할 답 = 1

console.log(solution(예시))