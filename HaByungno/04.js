// https://programmers.co.kr/learn/courses/30/lessons/42576

// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
// 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
// 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.

let 참가자 = ["mislav", "stanko", "mislav", "ana"]	;
let 완주자 = ["stanko", "ana", "mislav"];

// function solution(participant, completion) {
//     let answer = "";
//     // 참가자 인원중에 완주자 리스트에 없는 사람이 완주하지 못한 사람
//     for (let i = 0; i < participant.length ; i++) {
//         if (completion.indexOf(participant[i]) === -1) {
//             answer += participant[i]
//         } 
//     }
    
//     return answer;
// }
// 이렇게 하니까 동명이인을 잡아내지 못한다.
// 그래서 if문안에 if문을 한번 더 넣어서 조건을 돌려야 하나 생각하다가 그러면 동명삼인(?)을 또 못 잡을거 같아서...
// 다른 방법을 써야한다고 생각했다.



function solution(participant, completion) {
    participant.sort()
    completion.sort()
    console.log(participant.sort())
    console.log(completion.sort())
    for(let i=0;i<participant.length;i++){
        console.log(participant[i], "===" ,completion[i])
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
}



// function solution(participant, completion) {
//     let answer = [];

//     for (let i = 0; i < participant.length; i++) {
//         // 여기서 참가 인원을 하나씩 꺼내고
//         console.log(`${participant[i]} 가 완주했는지?`)
//         for (let j = 0; j < completion.length; j++) {
//             // 완주자 list 도 하나씩 꺼내 비교를 하는데
//             console.log(`${completion[j]} 비교해보자`)
//             if (participant[i] !== completion[j]) { // 같지 않으면? (완주자가 아니라면)

//                 console.log(`같지 않아?`)
//                 answer.push(participant[i]); // answer 어레이에 푸시해
//                 console.log(`${participant[i]} 를 answer 에 넣었어`)
//                 console.log(`현재 answer : ${answer}`)
//             } else {
//                 console.log('같아?')  // 완주자야?
//                 console.log(`현재 answer : ${answer}`)
//             }
//         }
//     }

//     return answer;
// }


let solution=(participant,completion)=>
    participant.find(name=>!completion[name]--,
                    completion.map(name=>completion[name]=(completion[name]|0)+1))


console.log(solution(참가자, 완주자));
