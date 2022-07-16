function solution(num) {
    let answer = 0;
    let numarr = String(num);
    let numstr = [...numarr]

    for (let i = 0; i < numstr.length; i++){
        answer += Number(numstr[i])

    }if (num % answer === 0) {
        return true;
    } else{
        return false;
        }
    }

    // 해결

    // 1. num를 문자열로 바꾼다. (예시: 18 -> "18")
    
    // 2. 문자열 num를 한 문자씩 쪼갠다. ("18" -> [ '1', '8' ]
    
    // 3. 문자를 숫자로 바꾼 후 변수 answer에 더한다. (answer = 9)
    
    // 4. num이 answer으로 나누어지는지 검사한다.
    
    // 5. 나눠지면 true 아니면 false 출력