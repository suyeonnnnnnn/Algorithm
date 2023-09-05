function solution(fees, records) {  
    let carTime = {};   // 각 차량의 주차 시간을 저장할 객체        //각 차량의 번호가 키
    let carStatus = {}; // 차량의 입/출차 상태 (IN/OUT) 저장할 객체

    // 차량의 주차 시간을 계산하는 로직
    for(let i = 0; i < records.length; i++) {
        let [time, number, status] = records[i].split(" ");
        const [h, m] = time.split(":");
        time = parseInt(h) * 60 + parseInt(m); // 시간과 분을 합쳐서 총 분으로 표현
        
        // 입차의 경우
        if(status === "IN") {
            if (!carTime[number]) {
                carTime[number] = 0;
            } // 초기화
            carTime[number] -= time; // 입차 시간을 감소로 표현하여 나중에 출차 시 더할 때 총 주차 시간이 계산되도록 함
            carStatus[number] = "IN";  // 주차장에서 나가지 않은 차 처리하기 위해 
        } else {
            // 출차의 경우
            carTime[number] += time;
            carStatus[number] = "OUT";
        }
    }

    // OUT 레코드가 없는 차량에 대해 23:59에 출차한 것으로 간주하고 처리
    for (let car in carStatus) {
        if (carStatus[car] === "IN") {
            carTime[car] += 1439; // 23:59를 분으로 표현한 값
        }
    }

    // 요금 계산하는 로직
    let answer = [];
    for (let car in carTime) {
        let time = carTime[car];
        let cost;
        if (time <= fees[0]) {
            // 기본 시간 이하 주차한 경우
            cost = fees[1];
        } else {
            // 기본 시간 초과한 경우
            cost = fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3];
        }
        answer.push([car, cost]);
    }

    // 차량 번호 순으로 정렬하는 로직
    answer.sort((a, b) => a[0] - b[0]);
    
    // 정렬된 결과에서 요금만 추출하여 반환
    return answer.map(item => item[1]);
}
