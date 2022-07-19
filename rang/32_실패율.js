// https://school.programmers.co.kr/learn/courses/30/lessons/42889
// fail

function solution(N, stages) {
    var answer = [];

    var challenger = 0;
    var base = stages.length;

    // 정확성 실패
    // 첫번째 시도
    // 시도한 사람이 base, 아직 통과하지 못한 사람이 challenger
    // 실패한 비율을 fail_rate에 집어넣음.
    // fail_rate를 내림차순으로 정렬한 index값을 answer에 넣음.
    var fail_rate = [];

    // 실패율 계산
    for (let i = 0; i < N; i++) {
        challenger = stages.filter((item) => item <= i + 1).length - (stages.length - base);
        fail_rate.push(challenger / base);
        // console.log(challenger, base);
        base -= challenger
    }

    console.log(fail_rate)

    for (let i = 0; i < N; i++) {
        var index = fail_rate.indexOf(Math.max(...fail_rate))
        answer.push(index + 1);
        fail_rate.splice(index, 1, -1);
        // console.log(fail_rate, answer);
    }

    // 참고한 풀이
    // 마지막 스테이지 통과하면 N+1 값인데 통과했으므로 무시
    // 실패율 계산해 answer에 [번호, 실패율] 넣음.
    for (let i = 0; i < N; i++) {
        challenger = stages.filter((item) => item === i + 1).length;
        answer.push([i + 1, challenger / base]);
        // console.log(challenger, base);
        base -= challenger
    }

    // 실패율을 기준으로 내림차순 정렬
    answer = answer.sort((a, b) => b[1] - a[1]);
    // 순위만 남도록 배열 값 변경
    answer = answer.map((item) => item[0]);

    return answer;
}


// testcase
let n = [5, 4, 3, 3];

let stages = [
    [2, 1, 2, 6, 2, 4, 3, 3],
    [4, 4, 4, 4, 4],
    [4, 4, 3, 3, 4],
    [0, 0, 0, 0, 0]
];

for (let i = 0; i < n.length; i++) {
    console.log('---------')
    console.log(solution(n[i], stages[i]));
}