// https://school.programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
	var answer = '';

	answer = '수박'.repeat(parseInt(n/2))

	if (n % 2 == 1) {
		answer += '수';
	}

	console.log(answer);

	return answer;
}

// testcase
solution(3)
solution(4)