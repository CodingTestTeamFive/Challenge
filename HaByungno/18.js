

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
    let supo1 = [1, 2, 3, 4, 5];
    let supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let stuOneAns = 0;
    let stuTwoAns = 0;
    let stuThrAns = 0;

    for (let i = 0; i <answers.length; i++) {
        if (answers[i] === supo1[i % supo1.length]) {
            stuOneAns++;
        }
        if (answers[i] === supo2[i % supo2.length]) {
            stuTwoAns++;
        }
        if (answers[i] === supo3[i % supo3.length]) {
            stuThrAns++;
        }   
    }

    let topScore = Math.max(stuOneAns, stuTwoAns, stuThrAns)

    console.log(topScore)

    if (topScore === stuOneAns){
        answer.push(1);
    } 
    if (topScore === stuTwoAns) {
        answer.push(2);
    }
    if (topScore === stuThrAns) {
        answer.push(3);
    }
    
    return answer;
}


console.log(solution(예시답안))