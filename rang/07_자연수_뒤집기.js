// https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
	var answer = [];
    
	var n_list = n.toString().split('');    // number to string

	n_list.forEach(element => {
		// answer.push(parseInt(element));     // string to int
        answer.push(parseInt(element));
	});

	return answer.reverse();
}

// testcase
console.log(solution(12345));