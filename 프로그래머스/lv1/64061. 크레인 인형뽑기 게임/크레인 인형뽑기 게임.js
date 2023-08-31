function solution(board, moves) {
    let answer = 0;
    let basket = [];
    let real_board = [];

    // 전치
    for(let i = 0; i < board.length; i++) {
        real_board[i] = [];
        for(let j = 0; j < board.length; j++) {
            real_board[i][j] = board[j][i];
        }
    }
    console.log(real_board)
    for (let i = 0; i < moves.length; i++) {

        while (real_board[moves[i] - 1].length !== 0) { // 해당 행이 비어있지 않으면
            let pickedItem = real_board[moves[i] - 1].shift();

            if (pickedItem !== 0) {
                basket.push(pickedItem);
                
                if (basket.length >= 2 && basket[basket.length - 1] === basket[basket.length - 2]) {
                    basket.pop();
                    basket.pop();
                    answer += 2;
                }
                break;
                
            }
        }
    }

    return answer;
}
