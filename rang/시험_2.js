// 7 min

function solution(n) {
    let result = ""
    let sum = 0;

    let arr = n.toString().split('').reverse();

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        sum += Number(arr[i]);

        result = i === arr.length - 1 ? result + '=' + sum : result + '+';

        // if (i === arr.length - 1) {
        //     result += '=' + sum;
        // } else  {
        //     result += '+'
        // }
    }

    // join() 사용 -> 성공
    result = arr.map((item) => {
        sum += Number(item);
        return Number(item);
    }).join('+')

    result += '=' + sum;

    return result;
}

console.log(solution(718253));

console.log(solution(12345));
console.log(solution(1532576));
console.log(solution(100000000));
console.log(solution(99999999));
