// https://school.programmers.co.kr/learn/courses/30/lessons/1845
// 15 min

function solution(nums) {
    var p_num = new Set(nums).size;

    if (p_num >= nums.length / 2) {
        return nums.length / 2;
    } else {
        return p_num;
    }
}

let nums = [
    [3, 1, 2, 3],
    [3, 3, 3, 2, 2, 4],
    [3, 3, 3, 2, 2, 2]
]

nums.forEach((item) => {
    console.log(solution(item))
});