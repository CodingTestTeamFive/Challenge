// 어떤 문제 누가누가 맡을까?

let members = ["하병노", "김은혜", "남궁은", "김아랑이"];

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {             // i 는 2
        const randomPosition = Math.floor(Math.random() * (i + 1));  // 0,1,2,3,4 중에 랜덤한 인덱스 값
        const temp = arr[i]; // 인덱스를 바꿀 요소 하나를 임시로 temp 변수에 넣고
        arr[i] = arr[randomPosition]; // 랜덤하게 뽑은 인덱스에 해당하는 요소로 교체한다
        arr[randomPosition] = temp; // 그리고 임시로 저장했던 요소를 랜덤하게 뽑혔던 자리에 넣는다
    }
    return arr
}

console.log(shuffle(members))
