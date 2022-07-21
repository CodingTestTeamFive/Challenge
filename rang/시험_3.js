// 문제를 다시 읽자....
// 중복인 값들은 전부 삭제해야 한다.

function solution(arr, n) {
    let answer = [];

    // 중복 제거 배열
    let arr_new = [...new Set(arr)];
    let arr_del = [];
    let arr_2 = arr;

    // oject를 활용해 요소의 갯수를 셈

    arr_new.filter((item) => {
        if (arr.includes(item)) {
            arr_2.slice(arr_2.indexOf(item), 1)
        }
    })

    for (let i = 0; i < arr_new.length; i++) {
        if (arr.includes(arr_new[i])) {
            arr.slice(arr.indexOf(arr[i]), 1)
            console.log(arr);
        }
    }

    console.log('new', arr_new);
    // console.log(arr_2);

    // for (let i = 0; i < arr.length; i++) {

    // }

    // 중복값 해당 -> 값 전부 삭제
    // for (let i=0; i<arr.length; i++) {
    //     let arr_del = arr.replace(arr[i], ''.toString());
    //     console.log(arr_del);
    // }

    // arr.filter((item) => {
    //     if (item === )
    // })


    // n번째 글자 처음으로 붙이기
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = arr[i][n] + arr[i];
    // }
    // console.log(arr);

    // // 정렬
    // arr.sort();
    // console.log(arr);

    // arr.forEach((item) => answer.push(item.slice(1)));

    return answer;
}

let arr = ["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
let n = 2;

console.log(solution(arr, n));



function solution2(arr, n) {
    let answer = [];
    arr.sort(function (a, b) {
        //[]를 통해서 바로 n번째 순서를 찾을 수 있습니다.
        //a가 b보다 크면 1이고
        if (a[n] > b[n]) {
            return 1;
        }
        //a가 b보다 작으면 -1로 지정했습니다.
        if (a[n] < b[n]) {
            return -1;
        }
        //문자열(단어) 비교해서 오름차순으로 정렬 했습니다.
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
    });

    for (let i = 0; i < arr.length; i++) {
        //arr단어가 다음 arr단어랑 비교해서 다르면 answer에 푸쉬해줬습니다.
        if (arr[i] !== arr[i + 1]) {
            answer.push(arr[i])
        }
    }
    return answer;
}