function solution(num) {
    let answer = 0;

    for (let i = 0; i < 500; i++){
        if (num != 1){
            if (num % 2 === 0){
                num /= 2;
            }else {
                num = num * 3+1;
            }
        }else {
            return answer = i;
        }
    }
    return answer = -1;
}

// 해결

// 1.for 문을 이용해서 500번을 돌린다.

// 2.돌린 값이 1이 아니면(짝수면) 2을 나눠준다.

// 3.홀수면 3을 곱하고 1을 더한다.

// 4.답이 1이면 제출

// 5.500번을 돌려도 안 되면 -1 제출