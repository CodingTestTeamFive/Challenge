// 신대륙 발견

// 기원이는 오늘 항해99를 시작했다. 성격이 급한 기원이는 항해 1일 차부터 언제 수료를 하게될 지 궁금하다.
// 항해 1일 차 날짜를 입력하면 98일 이후 항해를 수료하게 되는 날짜를 계산해주는 알고리즘을 만들어보자.

// 제한 조건
// 1 ≤ month ≤ 12
// 1 ≤ day ≤ 31 (2월은 28일로 고정합니다, 즉 윤일은 고려하지 않습니다.)

//

days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function solution(month, day) {
    let startDay = new Date(2022, month, day);
    // console.log(startDay.getDate())
    startDay.setDate(startDay.getDate() + 98);
    // console.log(startDay.getMonth(), startDay.getDate())
    let result = `${startDay.getMonth()}월 ${startDay.getDate()}일`;
    // let result = startDay.getMonth() +'월 '+ startDay.getDate() + '일';
    // console.log(result)
    return result;
}

console.log(solution(1, 18));
console.log(solution(11, 27));
console.log(solution(6, 22));

// 다른 답

// function anotherSolution(month, day) {
//     for (let i = 1; i <= 97; i++) {
//         if (month === 13) {
//             month = month - 12;
//         }
//         if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//             day = day + 1;
//             if (day === 32) {
//                 month = month + 1;
//                 day = day - 31;
//             }
//         }
//         if (month === 4 || month === 6 || month === 9 || month === 11) {
//             day = day + 1;
//             if (day === 31) {
//                 month = month + 1;
//                 day = day - 30;
//             }
//         }
//         if (month === 2) {
//             day = day + 1;
//             if (day === 29) {
//                 month = month + 1;
//                 day = day - 28;
//             }
//         }
//     }
//     return month + "월" + "" + day + "일";
// }

// console.log(solution(1, 18));


// function solution(arr1, arr2) {
//     let answer = 0;
//     for (i = 0; i < arr1.length; i++) {
//         arr2[i] >= 29 ? (arr2[i] = 21) : 0;
//         answer += arr2[i] - arr1[i];
//     }

//     return answer;
// }
// let arr1 = [9, 9, 9, 9, 7, 9, 8];
// let arr2 = [23, 23, 30, 28, 30, 23, 23];
// console.log(anotherSolution(arr1, arr2));
