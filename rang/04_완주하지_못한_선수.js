// https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

function solution(participant, completion) {
	var answer = '';

	// 성공 코드
	// sort() -> 유니코드가 아니면 사용 불가능
	participant = participant.sort();
	completion = completion.sort();

	for (let i = 0; i < participant.length; i++) {
		if (participant[i] != completion[i]) {
			return participant[i];
		}
	}

	// 효용성 테스트 통과 못한 코드
	for (let i = 0; i < participant.length; i++) {
		let check_value = completion.indexOf(participant[i])
		
		if (check_value == -1) {
			answer += participant[i];
		} else {
			completion.splice(check_value, 1);
		}
	}

	return answer;
}

// testcase
participant = [
	["leo", "kiki", "eden"],
	["marina", "josipa", "nikola", "vinko", "filipa"],
	["mislav", "stanko", "mislav", "ana"]
]
completion = [
	["eden", "kiki"],
	["josipa", "filipa", "marina", "nikola"],
	["stanko", "ana", "mislav"]
]

for (let i = 0; i < participant.length; i++) {
	solution(participant[i], completion[i])
}