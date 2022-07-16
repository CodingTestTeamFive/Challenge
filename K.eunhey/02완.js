function solution(arr, divisor) {
    var answer = [];
    for(i=0; i<arr.length; i++) {
      if(arr[i] % divisor == 0) {
        answer.push(arr[i]);
      }
    }
    if(answer.length == 0) {
      answer.push(-1);
    }
    answer.sort((a,b) => a - b);
    return answer;

}
console.log(solution([5, 9, 7, 10], 5));

// 설명 

// 우선 매개변수 arr의 length 값만큼 for 반복문을 사용하여 arr[i] 를 divisor 로 나누고 나머지가 0이 되는 요소들을
// answer 변수에 push(); 를 사용하여 넣어줍니다.
// 그 후 answer 를 sort() 메소드를 이용하여 순서대로 정렬해주고
// answer.length 값이 0 일때는 answer 에 -1를 push() 해줍니다.
// (divisor로 나누어 떨어지는 요소가 하나도 없다면 -1 를 리턴해주어야 하기 때문에)