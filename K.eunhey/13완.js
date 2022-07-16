function solution(n) {
    let answer = 0;
    
    let num = n.toString(3);
    num = num.split('').reverse().join('');
    
    answer =parseInt(num, 3); 
    return answer
}

// 해결

// 1.answer에 값 담아주는 변수 만듬

// 2.10 진법에서 3진법으로 변환

// 3.변환한 값을 한 단어 기준으로 쪼갠다(split)-> 뒤집어준다(reverse)-> 합친다(join)

// 4.다시 10진법으로 변환해준다.