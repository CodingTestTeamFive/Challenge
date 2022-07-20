// https://school.programmers.co.kr/learn/courses/30/lessons/42862#
// 60 min

function solution(n, lost, reserve) {
    var answer = 0;

    // 정렬 안하면 테스트 케이스 통과 못함
    lost.sort();
    reserve.sort();

    // 정확성 실패 -> 5, 12
    // 첫번째 풀이
    answer = n - lost.length;

    for (let i = 0; i < lost.length; i++) {
        if (reserve.includes(lost[i])) {
            // reserve value delete
            reserve.splice(reserve.indexOf(lost[i]), 1);
            answer++;
            // console.log('same', answer, lost[i], reserve);
        } else {
            if (reserve.includes(lost[i] - 1)) {
                reserve.splice(reserve.indexOf(lost[i] - 1), 1);
                answer++;
                // console.log('front', answer, lost[i], reserve);
            } else if (reserve.includes(lost[i] + 1)) {
                reserve.splice(reserve.indexOf(lost[i] + 1), 1);
                answer++;
                // console.log('back', answer, lost[i], reserve);
            }
        }
    }


    // 1, 6, 7 실패
    // 두번째 풀이
    // filter() 사용 -> 잃어버렸지만 여분이 있는 사람 제거
    answer = n - lost.length;

    lost.filter((item, index) => {
        if (reserve.includes(item)) {
            reserve.splice(reserve.indexOf(item), 1);
            lost.splice(index, 1);
            answer++;
        }
    })

    for (let i = 0; i < lost.length; i++) {
        if (reserve.includes(lost[i] - 1)) {
            reserve.splice(reserve.indexOf(lost[i] - 1), 1);
            answer++;
            // console.log('front', answer, lost[i], reserve);
        } else if (reserve.includes(lost[i] + 1)) {
            reserve.splice(reserve.indexOf(lost[i] + 1), 1);
            answer++;
            // console.log('back', answer, lost[i], reserve);
        }
    }


    // 성공!!
    // 세번째 풀이
    // 새로운 배열에 체육복 있는 사람 추가
    // Set()을 사용 -> 중복 삭제
    var reserve_check = [];     // 체육복 입기 가능

    for (let i=1; i<=n; i++) {
        if (!lost.includes(i)) {
            reserve_check.push(i);
        } else if (reserve.includes(i) && lost.includes(i)) {
            reserve_check.push(i);
            reserve.splice(reserve.indexOf(i), 1);
        }
    }

    for (let i = 0; i < lost.length; i++) {
        if (reserve.includes(lost[i] - 1)) {
            reserve_check.push(lost[i]);
            reserve.splice(reserve.indexOf(lost[i] - 1), 1);
            console.log('front', lost[i], reserve, reserve_check)
        } else if (reserve.includes(lost[i] + 1)) {
            reserve_check.push(lost[i]);
            reserve.splice(reserve.indexOf(lost[i] + 1), 1);
            console.log('back', lost[i], reserve, reserve_check)
        }
    }
    console.log('sdfsdf', reserve_check);

    answer = new Set(reserve_check).size;


    // 참고한 풀이
    // filter(), find() 사용
    var real_reserve = reserve.filter((item) => !lost.includes(item));
    var real_lost = lost.filter((item) => !reserve.includes(item));
    answer = n - real_lost.length;

    real_lost.filter((item) => {
        real_reserve.find((f_item) => {
            if (f_item === item - 1 || f_item === item + 1) {
                // console.log('find', item, real_reserve);
                real_reserve.splice(real_reserve.indexOf(f_item), 1);
                answer++;
            }
        })
    });

    return answer;
}

// testcase
let n = [5, 5, 3, 4, 5];
let lost = [
    [2, 4],
    [2, 4],
    [3],
    [2, 3],
    [1, 2]
];
let reserve = [
    [1, 3, 5],
    [3],
    [1],
    [2, 4],
    [2, 3]
];

for (let i = 0; i < n.length; i++) {
    console.log('solu', solution(n[i], lost[i], reserve[i]));
}
