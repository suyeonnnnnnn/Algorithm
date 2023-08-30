function solution(board, moves) {
    let answer = 0;
    let basket = [];

    for(let i = 0; i < moves.length; i++) {
        let column = moves[i] - 1;
        let pickedItem = null;

        // 가장 위의 인형을 찾음.
        for(let j = 0; j < board.length; j++) {
            if(board[j][column] !== 0) {
                pickedItem = board[j][column];
                board[j][column] = 0; // 해당 위치의 인형을 제거
                break;
            }
        }

        if(pickedItem) { // 인형이 선택된 경우
            if(basket.length > 0 && basket[basket.length - 1] === pickedItem) {
                basket.pop();
                answer += 2; // 연속된 인형 두개가 제거되므로 2 증가
            } else {
                basket.push(pickedItem);
            }
        }
    }

    return answer;
}
