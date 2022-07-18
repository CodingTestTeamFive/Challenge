// https://school.programmers.co.kr/learn/courses/30/lessons/86491

// 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 
// 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 
// 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 
// 이러한 요건을 만족하는 지갑을 만들기 위해 
// 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

// 아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

// 명함 번호	가로 길이	세로 길이
// 1	        60      	50
// 2	        30      	70
// 3	        60      	30
// 4	        80      	40
// 가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 
// 모든 명함들을 수납할 수 있습니다. 하지만 2번 명함을 가로로 눕혀 수납한다면 
// 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 
// 이때의 지갑 크기는 4000(=80 x 50)입니다.

// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 
// 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 
// solution 함수를 완성해주세요.

// 제한사항
// sizes의 길이는 1 이상 10,000 이하입니다.
// sizes의 원소는 [w, h] 형식입니다.
// w는 명함의 가로 길이를 나타냅니다.
// h는 명함의 세로 길이를 나타냅니다.
// w와 h는 1 이상 1,000 이하인 자연수입니다.

const 사이즈예시 = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]


function solution(sizes) {
    // 일단 각 원소 값 별로 모아서 따로 w,h 각각 리스트에 넣자
    let w = []; 
    let h = []; 
    
    for(let i = 0; i <sizes.length; i++){
        w.push(sizes[i][0])
        h.push(sizes[i][1])
    }

    console.log(w,h)
    console.log(Math.max(...w))
    console.log(Math.max(...h))

    // 만약에 w의 최대값 보다 h의 최대값이 더 크면
    // h 기준으로 해야할 것 같다.


    // 아니야
    // 두개 배열을 다 합쳐서 절반으로 가른다음 각각의 최대값 끼리 곱하면 될거같다.

    fullArr = [...w ,...h]
    console.log(fullArr)

    fullArr.sort((a,b)=>a-b)
    console.log(fullArr.sort((a,b)=>b-a)) // 내림차순정리
    console.log(fullArr)

    // 이제 배열을 반동가리 내자

    // 최대값1
    newWidth = fullArr[0]
    newHeight = fullArr[fullArr.length/2]


    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    // 배열 슬라이싱 참고 할까 했는데
    // 그냥 배열 길의 절반으로 하면 되겠다

    return newWidth*newHeight;
}

console.log(solution(사이즈예시))


nowTimes = new Date()


