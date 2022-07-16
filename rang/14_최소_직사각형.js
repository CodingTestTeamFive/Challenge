// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
    var answer = 0;

    var max_x = 0;
    var max_y = 0;

    // 첫번째 방법 -> 정확성 실패
    // sort() -> ASCII 순서대로 출력 -> 숫자 순서대로 출력되지 않음
    // sizes.forEach((item) => {
    //     item.sort();
    //     max_x = item[0] > max_x ? item[0] : max_x;
    //     max_y = item[1] > max_y ? item[1] : max_y;
    // });

    console.log(sizes);

    // 성공
    // 두번째 방법
    sizes.forEach((item) => {
        if (item[0] > item[1]) {
            if (item[0] > max_x)    max_x = item[0]
            if (item[1] > max_y)    max_y = item[1]
        } else {
            if (item[1] > max_x)    max_x = item[1]
            if (item[0] > max_y)    max_y = item[0]
        }
        console.log(item, max_x, max_y)
    });

    // 성공
    // 세번째 방법
    // 첫번째 방법에서 sort()를 sort((a, b) -> a - b) 로 변경
    // sizes.reduce() 찾아보기
    sizes.forEach((item) => {
        item.sort((a, b) => a - b);
        if (item[0] > max_x)    max_x = item[0]
        if (item[1] > max_y)    max_y = item[1]
    });

    answer = max_x * max_y;

    return answer;
}

// testcase
sizes = [
    [
        [60, 50],
        [30, 70],
        [60, 30],
        [80, 40]
    ],
    [
        [10, 7],
        [12, 3],
        [8, 15],
        [14, 7],
        [5, 15]
    ],
    [
        [14, 4],
        [19, 6],
        [6, 16],
        [18, 7],
        [7, 11]
    ]
]

sizes.forEach((item) => console.log(solution(item)));