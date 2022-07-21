function solution(dartResult) {
    var answer = 0;

    for (let i=0; i<dartResult.length; i++) {
        if (Number(dartResult[i])) {
            
        } else {
            
        }
        // console.log(Number(dartResult[i]))
    }

    return answer;
}

let dart = ["1S2D*3T", "1D2S#10S", "1D2S0T", "1S*2T*3S", "1D#2S*3S", "1T2D3D#", "1D2S3T*"];

dart.forEach((item) => console.log(solution(item)));
