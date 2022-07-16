const solution = (s) => s
    .split(" ")
    .map((strArr) => 
    strArr
        .split("")
        .map((str, index) => {
            if ((index + 1) % 2 !== 0 ) return str.toUpperCase();
            return str.toLowerCase();
        })
        .join("")
    )
    .join(" "); 

// 설명

// spilt를 이용해서 " " (띄어쓰기)기준으로 단어 단위의 배열을 만든다.  -> try, hello, world

// 그 다음에는 map을 돌면서 spilt 으로 한번 더 문자단위로 끊어 배열을 만든다. -> t r y, h e l l o, w o r l d

// 만들어진 배열을 map 돌면서 문자의 인덱스가 짝수이면 대문자로, 홀수이면 소문자로 변환한다. 

// 이후에 join으로 합쳐 문자열로 만들고 -> "TrY","HeLlO","WoRlD"

// 한 번 더 join 한다. ->  "TrY HeLlO WoRlD"

// 이때에는 " " (띄어쓰기)를 배열들 사이에 넣어준다. 

// 이렇게 만들어진 문자열을 최종적으로 반환한다.


// * 띄어 쓰기 없으면 -> "TrYHeLlOWoRlD" 이렇게 출력 됨
