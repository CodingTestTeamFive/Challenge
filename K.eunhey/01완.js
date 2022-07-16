// 이렇게 풀면 통과 x
function solution(a, b) {
    var week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var dayOfWeek = week[new Date('2016-05-24').getDay()];
    
    return dayOfWeek;
}

// 이렇게 `2016-${a}-${b}` 묶어 줘야 함.
function solution(a, b) {
    let date = String(new Date(`2016-${a}-${b}`))
        date = date.split(' ')[0].toUpperCase()
    return date;
}