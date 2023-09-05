function solution(ingredient) {
    var answer = 0;
  
    for(let i = 0; i < ingredient.length; i++) {
        if(ingredient[i] == 1 && ingredient[i+1] == 2 && ingredient[i+2] == 3 && ingredient[i+3] == 1) {
            ingredient.splice(i,4);
            // console.log(ingredient);
            answer += 1;
            // i == 0; // 배열에서 4개의 원소를 제거했기 때문에 현재 위치를 4만큼 뒤로 이동
            i-=4;  
        }
        // console.log(i);
         
    }
    // console.log(ingredient)
        return answer;
}