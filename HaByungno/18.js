// https://school.programmers.co.kr/learn/courses/30/lessons/42840

// 모의고사

// 수포자는 수학을 포기한 사람의 준말입니다.
// 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다.
// 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, //  1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5,//  2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, // 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때,
// 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한 조건
// 시험은 최대 10,000 문제로 구성되어있습니다.
// 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

let 예시답안 = [1,3,2,4,2]

function solution(answers) {
    let answer = [];
    let supo1 = [1, 2, 3, 4, 5];                // 수포자1의 패턴
    let supo2 = [2, 1, 2, 3, 2, 4, 2, 5];       // 수포자2의 패턴
    let supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 수포자3의 패턴
    let stuOneAns = 0;
    let stuTwoAns = 0;
    let stuThrAns = 0;                  
    // 맞춘 갯수를 셀 변수 각각 stuOneAns, stuTwoAns, stuThrAns


    // 들어온 answers 배열의 길이만큼 반복하는데
    for (let i = 0; i <answers.length; i++) {
        if (answers[i] === supo1[i % supo1.length]) {   // 수포자1은 5개씩 반복하며 찍는다
            stuOneAns++;
        }
        if (answers[i] === supo2[i % supo2.length]) {   // 수포자2은 8개씩 반복하며 찍는다
            stuTwoAns++;
        }
        if (answers[i] === supo3[i % supo3.length]) {   // 수포자3은 10개씩 반복하며 찍는다
            stuThrAns++;
        }   
    }   // 찍은 답들과 실제 답안이 일치할 때마다 해당 수포자들이 맞춘 갯수를 하나씩 ++ 한다.


    // 그리고 3명이 맞춘 답안의 수들을 비교해서 최고값을 topScore 안에 넣는다.
    let topScore = Math.max(stuOneAns, stuTwoAns, stuThrAns)

    if (topScore === stuOneAns){  // 만약 최고 점수를 받은 사람이 여러명이라면
        answer.push(1);
    } 
    if (topScore === stuTwoAns) {
        answer.push(2);
    }
    if (topScore === stuThrAns) {
        answer.push(3);
    }                              // 각각 해당하는 학생의 번호를 answer에 push 한다.
    return answer;
}


console.log(solution(예시답안))