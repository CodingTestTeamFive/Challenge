function solution(n){
    let answer = 0;
    let a = String(n);
    for (let i = 0; i < a.length; i++){
        answer += parseInt(a[i]);
    };
    return answer;
}
console.log(solution(324))


// [ 해결 코드 ]

// 우선 answer를 0으로 지정해두고 변수 a에 숫자를 문자열로 변환해 주는 String() 함수를 이용하여 매개변수를 

// 문자열로 변환줬다.

// 그 후에 반복문으로 문자열 a의 length 값만큼 반복해서 answer에 더해준다.

// 이때 숫자로 더해주어야 하기 때문에 parseInt() 를 이용하여 a안의 값들을 정수로 변환시켜 answer에 더해줬다.

 

​