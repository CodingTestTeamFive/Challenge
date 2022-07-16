// https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
    var answer = 0;

    // String(str), str.toString() 차이 찾아보기
    var n_list = n.toString().split('');
    // [...n.toString()] == list.split('')

    // parseInt(), Number() 차이 찾아보기
    n_list.forEach(element => {
        answer += parseInt(element);
    });
    
    // list.reduce((a, b) => {return a + b})

    return answer;
}

// testcase
console.log(solution(123));
console.log(solution(987));