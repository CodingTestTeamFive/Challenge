// https://school.programmers.co.kr/learn/courses/30/lessons/42862

// 체육복

// 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 
// 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 
// 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 
// 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 
// 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

// 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
// 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
// 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 전체 학생의 수는 2명 이상 30명 이하입니다.
// 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
// 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 
// 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.




// 여벌이 있는 학생에서 -1 +1 커버
// [1,2,3,4,5] 에서 3만 여벌이 있고 2,4가 도난 당했다면 2나 4중에 한명한테만 줄수 있다.
// 그래서 1,2,3,5 또는 1,3,4,5 이렇게 수업을 들을 수 있으니까 최대 4명까지 수업 가능

// [1,2,3,4,5] 중에 reserve가 [4] 이고 lost가 [1,3] 이라면 3에게만 빌려줄수 있으므로
// 2,3,4,5 

// 근데 보니까 여벌 가져온 학생이 도난 당할 수도 있다
// 그러면 그냥 체육복 한개 가져온 학생으로 취급한다.


// 탐욕 알고리즘 문제를 해결하는 방법
// - 선택 절차(Selection Procedure): 현재 상태에서의 최적의 해답을 선택한다.
// - 적절성 검사(Feasibility Check): 선택된 해가 문제의 조건을 만족하는지 검사한다.
// - 해답 검사(Solution Check): 원래의 문제가 해결되었는지 검사하고, 해결되지 않았다면 선택 절차로 돌아가 위의 과정을 반복한다.


// Set 객체로 풀어볼까

// 차집합
Set.prototype.difference = function(set) {
    var difference = new Set(this);
    for (var elem of set) {
        difference.delete(elem);
    }
    return difference;
}
// setA.difference(setB) setA에서 setB 를 뺀 차집합

// 교집합
Set.prototype.intersection = function(setB) {
    var intersection = new Set();
    for (var elem of setB) {
        if (this.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}


// function solution(n, lost, reserve) {
//     var answer = 0;
//     let students = []
//     for (let i = 1; i <= n; i++) students.push(i); 
//     console.log(students)
//     let stSet = new Set(students)
//     let loSet = new Set(lost)
//     let reSet = new Set(reserve)
    
//     // let loSetP1  = for(let item of loSet) item+=1;

//     let normalStudents = stSet.difference(loSet).difference(reSet) // 여벌도 없고 도난도 안당한 학생들
//     // 이 학생들은 무조건 수업 참가
//     console.log('normalStudents의 크기 : ',normalStudents.size)
//     console.log(normalStudents)

//     // 수업 참가 확정 학생은 normalStudents + reserve

//     // loSet 에 속한 학생들 중 양옆 중 하나에 reSet 속한 학생이 있는 경우
//     // 그 loSet의 학생은 참가 가능
//     // 그런데 그 학생에게 이미 체육복을 빌려준 학생은 이제 normalStudents로 취급 되야함
//     // 

//     // loSet의 양 옆값을 어케 가져오지
//     // stSet - loSet - normalStudents =
//     let hasAnother= stSet.difference(loSet).difference(normalStudents) // 여분이 있는 학생?
//     console.log(hasAnother)
//     console.log(reSet)
    
//     console.log('확인')
//     console.log(loSet.intersection(reSet) == \\)
//     console.log(Boolean(loSet.intersection(reSet)))

//     if (loSet.intersection(reSet))


//     // if (loSet.has())



//     // console.log(stSet.has(...loSet))
//     // console.log(stSet.has(...reSet))


//     return answer;
// }


let exN = 5;  // [1,2,3,4,5]
let exLost = [2,4];
let exReserve = [1,3,5];
console.log('답1 : ',solution(exN, exLost, exReserve))

function solution(n, lost, reserve) {
    let count = n - lost.length;      // 5명이 총원이면 잃어버린애들이 2일때 가지고 있는애들이 3인 것
    let tmp_lost = [];
    lost.sort()
    reserve.sort()

    // lost와 reserve 두 개 모두 속한 애는 여벌 옷이 없는 것과 같다.
    // 따라서 reserve 배열에서 제거하고, count를 1 증가시킨다.
    for (let i = 0; i < lost.length; i++) {
        if (reserve.includes(lost[i])) {
            reserve = reserve.filter(element => element !== lost[i]);  // lost와 reserve 교집합이 아닌애들 
            count++;    // 수업 참가인원에 더한다.
            // console.log(reserve)  // []
        } else {
            // lost, reverse 두 개 모두에 속하지 않은 원소를 따로 저장해둔다.
            tmp_lost.push(lost[i]);  // 가져왔는데 잃어버린애
            // console.log(tmp_lost)
        }
    }
    lost = tmp_lost;   // 4 체육복을 빌려야 하는 애들 의 배열
    // console.log(lost)   // [2, 4]

    for (let i = 0; i < lost.length; i++) {
        // console.log(lost[i],lost[i]-1)  
        if (reserve.includes(lost[i] - 1)) { // 자기보다 왼쪽에 있는 경우
            reserve = reserve.filter((e) => e !== lost[i] - 1);
            // console.log(reserve)
            count++;
            console.log(count)
        }
        else if (reserve.includes(lost[i] + 1)) { // 자기보다 오른쪽에 있는 경우
            reserve = reserve.filter((e) => e !== lost[i] + 1);
            // console.log(reserve)
            count++;
            // console.log(count)
        }
    }
    
    return count;
}



// console.log('답2 : ',solution(5, [2,4], [3]))
// console.log('답3 : ',solution(3, [3], [1]))