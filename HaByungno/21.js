// https://school.programmers.co.kr/learn/courses/30/lessons/12977

// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
// 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때,
// nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록
// solution 함수를 완성해주세요.

// 제한사항
// nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
// nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.


let 예시 = [1, 2, 7, 6, 4];
// 출력되야 할 답 = 4

// 해야 할것
// 배열 중 중복되지 않게 3개의 숫자를 모두 뽑는 경우의 수를 모두 찾고
// 그 숫자들을 모두 더한 값을 나열한 다음에
// 합쳐진 각각의 숫자들이 소수인지 판별해서 그 갯수를 세면 됨




function solution(nums) {
    let combinations = []; // 각 조합을 담을 배열
    let picked = []; // 선택한 요소의 인덱스가 담길 배열
    let used = []; // nums의 길이만큼 0이 푸시될 배열
    for (item of nums) used.push(0); // used는 nums의 요소중 같은 요소가 중복될 경우 중복되는 조합이 combinations에 추가되는것을 막기 위함

    function find(picked) {
        // 3개 요소를 뽑으면 종료한다.
        if (picked.length === 3) {
            const rst = [];
            for (let i of picked) {
                rst.push(nums[i]); // 종료할 때는 rst라는 배열에 picked에 속한 인덱스를 바탕으로 nums의 실제 요소를 담는다
            }
            combinations.push(rst); // rst가 완성되면 combinations에 담고 retrun을 통해 함수를 종료한다.
            return;
        } else {
            let start = picked.length ? picked[picked.length - 1] + 1 : 0; // 시작 인덱스를 담기 위한 변수 start
            // 만약 picked에 이미 인덱스가 있다면 그 인덱스보다 1 큰수를 없다면 0을 start로 선언

            for (let i = start; i < nums.length; i++) {
                // for문을 통해 start부터 nums.length까지 i에 대해 뽑기를 시작한다.
                if (i === 0 || nums[i] !== nums[i - 1] || used[i - 1]) {
                    // 만약 i == 0 즉 첫원소이면 무조건 뽑는다. 혹은 nums[i] 와 nums[i-1]이 서로 같지 않다면 역시 뽑는다. 마지막으로 used[i-1]이 이미 뽑혀서 1인 경우, i를 뽑는다.

                    picked.push(i); // 뽑게 된 후엔 picked에 i를 담고, used[i]는 1로 바꿔준다. 이후 find(picked)를 통해 재귀호출을 진행한다.
                    used[i] = 1;
                    find(picked);
                    picked.pop(); // 재귀 이후엔 picked.pop()을 통해 가장 마지막에 추가한 요소를 제거해 다음 요소를 탐색할 수 있게 한다
                    used[i] = 0; // used[i]도 0으로 초기화 해준다.
                }
            }
        }
    }
    find(picked);

    function sumOfElements(n) {
        combiResult = [];

        for (let i = 0; i < n.length; i++) {
            combiResult.push(
                String(n[i])
                    .split(",")
                    .map((element) => parseInt(element))
                    .reduce((x, y) => {
                        return x + y;
                    })
            );
            // console.log(combiResult)
        }
        return combiResult;
    }

    sumOfElements(combinations);

    function isPrime(n) {
        let answer = 0;
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
            answer++;
        }
        console.log("82번줄");
        // console.log(answer);
        return answer;
    }
    whatIsPrimeNum = isPrime(combiResult);

    return combiResult;
}

console.log(solution(예시));

// 레퍼런스
// https://leonkong.cc/posts/combinations-js.html






