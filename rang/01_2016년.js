// https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
	var answer = '';

	var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
	let date = new Date(`2016-${a}-${b}`)

	answer = days[date.getDay()]
	console.log(answer)

	return answer;
}

// testcase
solution(5, 24)
solution(5, 23)
solution(5, 22)
solution(1, 1)