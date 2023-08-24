function solution(n, lost, reserve) {
    var answer = 0;
    
    lost.sort((a,b) => a-b);
    reserve.sort((a,b) => a-b);
    
    let new_lost = lost.filter(number => !reserve.includes(number));
    let new_reserve = reserve.filter(number => !lost.includes(number));
    
    let have_clothes = n - new_lost.length;

    for(let i = 0; i < new_lost.length; i++) {
        if (new_reserve.includes(new_lost[i] - 1)) {
            have_clothes++;
            new_reserve = new_reserve.filter(res => res !== new_lost[i] - 1);
        } else if (new_reserve.includes(new_lost[i] + 1)) {
            have_clothes++;
            new_reserve = new_reserve.filter(res => res !== new_lost[i] + 1);
        }
    }
    return have_clothes;
}
