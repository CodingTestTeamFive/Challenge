// 25 min
// 문제를 제대로 읽자
// 곱셈이 아니라 덧셈이였다..... 삽질했다....

function solution(arr1, arr2, signs) {
    let answer = [
        []
    ];

    answer.pop();
    for (let i = 0; i < arr1.length; i++) {
        let arr = [];
        for (let j = 0; j < arr1[i].length; j++) {
            arr.push(signs[i][j] ? arr1[i][j] + arr2[i][j] : -(arr1[i][j] + arr2[i][j]))
        }
        answer.push(arr);
    }

    return answer;
}

let arr1 = [
    [5, 7, 1],
    [2, 3, 5]
];
let arr2 = [
    [5, 1, 6],
    [7, 5, 6]
];
let signs = [
    [true, true, false],
    [false, true, false]
];

console.log(solution(arr1, arr2, signs));

let arr1_2 = [
    [
        [1, 2],
        [2, 3]
    ],
    [
        [1],
        [2]
    ]
]

let arr2_2 = [
    [
        [3, 4],
        [5, 6]
    ],
    [
        [3],
        [4]
    ]
]

let signs_2 = [
    [
        [true, true],
        [true, false]
    ],
    [
        [false],
        [false]
    ]
]

for (let i=0; i<arr1_2.length; i++) {
    console.log(solution(arr1_2[i], arr2_2[i], signs_2[i]));
}
