// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

function solution(s) {
    var answer = s.split(" ")
    let re = /^[a-zA-Z]*$/; 
    console.log(answer)
    for (let i = 0; i < answer.length; i++)
        
        for(let j = 0; j< answer[i][j].length; i++){
            console.log(answer[i][j])
            let answer = answer[i][j].split()
            // if (j % 2 === 0) {
            //     newArr
            // }
        }

        // if (re.test(answer[i]) && (i % 2 === 0)) {
        //     answer[i] = answer[i].toUpperCase()
        // } else {
        //     answer[i] = answer[i].toLowerCase()
        // }
        // answer = answer.join(" ")
    return answer;
}

// 문제를 잘 이해 했어야 했는데... ㅋㅋ




console.log(solution("hi my Name is DAN"))