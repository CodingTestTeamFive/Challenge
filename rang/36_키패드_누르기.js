// https://school.programmers.co.kr/learn/courses/30/lessons/67256
// fail

function solution(numbers, hand) {
    var answer = '';

    // * = 10, # = 12
    let center = [2, 4, 8, 11];
    let hand_place = [10, 12];
    let distance = [0, 0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            numbers[i] = 11;
        }

        // left
        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            answer += 'L';
            hand_place[0] = numbers[i];
        }
        // right
        else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            answer += 'R';
            hand_place[1] = numbers[i];
        }
        // middle
        else {
            console.log('center', numbers[i], hand_place)

            // 현재 손 위치가 중앙에 있는지 확인

            // 중앙에 없다면 가야할 위치 - 현재 위치 / 3
            // 중앙에 있다면 왼쪽/오른쪽으로 1만큼 이동한 뒤 / 3 -> + 1
            // distance[0] = center.indexOf(hand_place[0]) !== -1 ?
            //     Math.abs(numbers[i] - hand_place[0]) / 3 :
            //     Math.abs(numbers[i] - 1 - hand_place[0]) / 3 + 1;

            // distance[1] = center.indexOf(hand_place[1]) !== -1 ?
            //     Math.abs(numbers[i] - hand_place[1]) / 3 :
            //     Math.abs(numbers[i] + 1 - hand_place[1]) / 3 + 1;

            distance[0] = center.indexOf(hand_place[0]) !== -1 ?
                Math.abs(numbers[i] - hand_place[0]) / 3 :
                Math.abs(numbers[i] - 1 - hand_place[0]) / 3 - 1;

            distance[1] = center.indexOf(hand_place[1]) !== -1 ?
                Math.abs(numbers[i] - hand_place[1]) / 3 :
                Math.abs(numbers[i] + 1 - hand_place[1]) / 3 - 1;
                    

            console.log(center.indexOf(hand_place[0]));
            console.log(distance);

            if (distance[0] === distance[1]) {
                console.log('-----------------')
                console.log("center same")
                if (hand === 'left') {
                    answer += 'L';
                    hand_place[0] = numbers[i];
                } else {
                    answer += 'R';
                    hand_place[1] = numbers[i];
                }
            } else if (distance[0] < distance[1]) {
                answer += 'L';
                hand_place[0] = numbers[i];
            } else {
                answer += 'R';
                hand_place[1] = numbers[i];
            }
        }
        console.log(hand_place, numbers[i], answer);
    }

    return answer;
}


const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
];

const solution2 = (numbers, hand) => {
    const answer = [];

    let left_hand = [3, 0];
    let right_hand = [3, 2];

    const numbers_index = numbers.map((num) => {
        let index;
        for (let i = 0; i < keypad.length; i++) {
            for (let j = 0; j < keypad[0].length; j++) {
                if (num === keypad[i][j]) {
                    index = [i, j];
                    break;
                }
            }
        }
        return index;
    });

    numbers_index.forEach((index) => {
        if (index[1] === 0) {
            answer.push('L');
            left_hand = index;
        } else if (index[1] === 2) {
            answer.push('R');
            right_hand = index;
        } else {

            let left_distance = Math.abs(index[0] - left_hand[0]) + Math.abs(index[1] - left_hand[1]);
            let right_distance = Math.abs(index[0] - right_hand[0]) + Math.abs(index[1] - right_hand[1]);
            
            if (left_distance === right_distance) {
                if (hand == 'left') {
                    answer.push('L');
                    left_hand = index;
                } else {
                    answer.push('R');
                    right_hand = index;
                }
            } else if (left_distance > right_distance) {
                answer.push('R');
                right_hand = index;
            } else {
                answer.push('L');
                left_hand = index;
            }
        }
    });
    return answer.join('');
};


// testcase
let numbers = [
    [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],
    [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
];

let hand = ["right", "left", "right"];

for (let i = 0; i < hand.length; i++) {
    console.log(solution(numbers[i], hand[i]))
}
