// https://school.programmers.co.kr/learn/courses/30/lessons/64061
// 45 min

function solution(board, moves) {
    var answer = 0;

    // 성공
    // 첫번째 풀이
    // 배열을 뒤집은 다음 실행
    var basket = [];
    var board_rot = [];

    // 배열 뒤집기
    for (let i = 0; i < board[0].length; i++) {
        let tmp = [];
        board.map((item) => {
            tmp.push(item[i]);
        })
        board_rot.push(tmp);
    }

    // console.log(board_rot);

    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board_rot.length; j++) {
            // 크레인 위치와 배열의 인덱스가 같을 때
            if (moves[i] === j + 1) {
                let idx = board_rot[j].findIndex((item) => item > 0);

                // 크레인 위치에 값이 있다면
                if (idx >= 0) {
                    // basket 값 연속 확인
                    console.log(i, 'basket end:', basket[basket.length - 1], 'push value:', board_rot[j][idx]);

                    // basket end value === push value
                    if (basket[basket.length - 1] === board_rot[j][idx]) {
                        basket.pop();
                        answer += 2;
                    } else {
                        basket.push(board_rot[j][idx]);
                    }

                    board_rot[j][idx] = 0;
                }
            }
        }
    }

    // 참고한 풀이
    // 조금 더 빠름
    for (let i = 0; i < moves.length; i++) {
        var now = moves[i] - 1;
        for (let j = 0; j < board.length; j++) {
            // 크레인 위치에 값이 있으면 -> 행에 값이 있다면
            if (board[j][now] !== 0) {
                // basket end value === push value
                if (basket[basket.length - 1] === board[j][now]) {
                    basket.pop();
                    answer += 2;
                } else {
                    basket.push(board[j][now]);
                }

                board[j][now] = 0;
                break;
            }
        }
    }

    return answer;
}

// testcase
let board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]
];

let moves = [1, 5, 3, 5, 1, 2, 1, 4]

console.log(solution(board, moves));