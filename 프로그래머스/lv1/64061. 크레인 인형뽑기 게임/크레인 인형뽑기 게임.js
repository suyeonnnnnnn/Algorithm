function solution(board, moves) {
    let answer = 0;
    let basket = []; // 인형을 담는 바구니

    for (let i = 0; i < moves.length; i++) {
        let column = moves[i] - 1; // 1-base indexing을 0-base indexing으로 변경

        for (let row = 0; row < board.length; row++) {
            // 해당 위치에 인형이 있다면
            if (board[row][column] !== 0) {
                basket.push(board[row][column]); // 바구니에 인형을 넣는다.
                board[row][column] = 0; // 그 위치의 인형을 제거한다.

                // 만약 바구니에 연속된 동일한 인형이 있다면 제거
                if (basket.length >= 2 && basket[basket.length - 1] === basket[basket.length - 2]) {
                    basket.pop();
                    basket.pop();
                    answer += 2; // 제거된 인형의 수를 더한다.
                }

                break; // 해당 column에서는 더 이상의 인형을 선택할 수 없으므로 loop를 탈출한다.
            }
        }
    }

    return answer;
}
