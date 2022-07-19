function solution(month, day) {
    let result = "";

    const start = new Date(2022, month - 1, day);
    result = new Date(start.setDate(start.getDate() + 98))
    result = `${result.getMonth()+1}월 ${result.getDate()}일`

    return result;
}

console.log(solution(1, 18));
console.log(solution(11, 27));
console.log(solution(6, 22));

// console.log(solution(1, 18));

// function solution(month, day) {
//     for (let i = 1; i <= 97; i++) {
//         if (month === 13) {
//             month = month - 12
//         }
//         if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//             day = day + 1
//             if (day === 32) {
//                 month = month + 1
//                 day = day - 31
//             }
//         }
//         if (month === 4 || month === 6 || month === 9 || month === 11) {
//             day = day + 1
//             if (day === 31) {
//                 month = month + 1
//                 day = day - 30
//             }
//         }
//         if (month === 2) {
//             day = day + 1
//             if (day === 29) {
//                 month = month + 1
//                 day = day - 28
//             }
//         }

//     }
//     return month + '월' + '' + day + '일'
// }
