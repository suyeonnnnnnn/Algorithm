function solution(phone_number) {
    var answer = '';
    let number = [];
    
    for(let i = 0; i < phone_number.length-4; i++) {
        number.push('*');
    }
    
    for(let i = phone_number.length-4; i < phone_number.length; i++) {
        number.push(phone_number[i]);
    }
    
    
    return number.join('');
}