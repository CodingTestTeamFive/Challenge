// https://school.programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
    var answer = 0;
    var num_list = [];

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];  
                if (!num_list.includes(sum))
                    num_list.push(sum);
                    
                    if (is_prime(sum))
                        answer++;
            }
        }
    }

    return answer;
}

function is_prime(num) {
    for(let i = 2; i < parseInt(num / 2); i++) {
        if (num % i === 0)
            return false;
    }
    
    return true
}

// testcase
let nums = [
    [1, 2, 3, 4],
    [1, 2, 7, 6, 4]
]

nums.forEach((item) => console.log(solution(item)));
