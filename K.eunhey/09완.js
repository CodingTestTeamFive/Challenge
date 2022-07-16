function solution(num) {
    let answer = 0;
    let math = Math.sqrt(num);

    if (math % 1 === 0 ) {
        answer += Math.pow(math+1 ,2)
    }else{
        return -1
    }
    return answer
}

// 해결

// 1. num이 어떤수의 제곱인지를 확인하기 위해 math이라는 변수에 num의 제곱근 값을 넣어준다.

// 2. 그 후에 만약 num의 제곱근이 정수이면 math + 1 의 제곱만큼의 값을 더해준다.

// 3. 그렇지 않으면 -1을 리턴한다.