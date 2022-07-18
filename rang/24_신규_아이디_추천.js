// https://school.programmers.co.kr/learn/courses/30/lessons/72410#
// 30 min

function solution(new_id) {
    var answer = '';

    // 성공
    // 첫번째 풀이
    // step 1-2
    new_id = new_id.toLowerCase().replace(/[^a-z0-9-_.]/g, '');

    // step 3
    while(true) {
        if (new_id.includes('..')) {
            new_id = new_id.replace('..', '.');
        } else {
            break;
        }
    }

    // step 4
    if (new_id[0] === '.') {
        console.log('start', new_id)
        new_id = new_id.slice(1, new_id.length);
    }
    if (new_id[new_id.length - 1] === '.') {
        new_id = new_id.slice(0, new_id.length-1);
    }
    
    // step 5
    if (new_id.length == 0) {
        new_id += 'a'
    }

    // step 6
    if (new_id.length >= 16) {
        new_id = new_id.slice(0, 15);
    }

    if (new_id[0] === '.') {
        new_id = new_id.slice(1);
    }
    if (new_id[new_id.length - 1] === '.') {
        new_id = new_id.slice(0, new_id.length-1);
    }

    // step 7
    while (new_id.length < 3) {
        new_id += new_id[new_id.length - 1];
    }


    // 참고한 풀이
    // 정규식, 체이닝 공부
    new_id = new_id.toLowerCase()
        .replace(/[^\w-_.]/g, '')
        .replace(/\.+/g, '.')
        .replace(/^\.|\.$/g, '')
        .replace(/^$/g, 'a')
        .slice(0, 15).replace(/\.$/, '');

    if (new_id.length < 3) {
        new_id = new_id + new_id.charAt(new_id.length - 1).repeat(3-new_id.length);
        // new_id = new_id + new_id.at(-1).repeat(3-new_id.length);
    }

    return new_id;
}

// testcase
let new_id = [
    "...!@BaT#*..y.abcdefghijklm",
    "z-+.^.",
    "=.=",
    "123_.def",
    "abcdefghijklmn.p"
];

new_id.forEach((item) => console.log(solution(item)));
