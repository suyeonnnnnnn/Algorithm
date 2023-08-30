function solution(board, moves) {
    let answer = 0;
    let basket = [];
    let real_board = [];

    // Transpose the board
    for(let i = 0; i < board.length; i++) {
        real_board[i] = [];
        for(let j = 0; j < board.length; j++) {
            real_board[i][j] = board[j][i];
        }
    }

    for(let i = 0; i < moves.length; i++) {
        let column = moves[i] - 1;
        let pickedItem = null;

        // 전치행렬을 사용해서 가장 위에 있는 인형을 찾습니다.
        while(real_board[column].length && !pickedItem) {
            pickedItem = real_board[column].shift();
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
