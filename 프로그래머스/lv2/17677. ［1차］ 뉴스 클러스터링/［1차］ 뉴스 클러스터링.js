function solution(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    let str1_arr = [];
    let str2_arr = [];

    for(let i = 0; i < str1.length - 1; i++) {
        let a = str1.slice(i, i + 2);
        if (/^[a-z]{2}$/.test(a)) { 
            str1_arr.push(a);
        }   
    }

    for(let i = 0; i < str2.length - 1; i++) {
        let a = str2.slice(i, i + 2);
        if (/^[a-z]{2}$/.test(a)) { 
            str2_arr.push(a);
        }   
    }

    let intersection = 0;
    let union = str1_arr.length + str2_arr.length;

    for(let i = 0; i < str1_arr.length; i++) {
        if (str2_arr.includes(str1_arr[i])) {
            str2_arr.splice(str2_arr.indexOf(str1_arr[i]), 1);
            intersection++;
        }
    }

    union -= intersection;

    if (union === 0) return 65536;

    return Math.floor((intersection / union) * 65536);
}
