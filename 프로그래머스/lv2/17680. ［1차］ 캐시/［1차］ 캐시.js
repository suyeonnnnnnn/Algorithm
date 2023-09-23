function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];
    
    if (cacheSize === 0) {
        return cities.length * 5;  
    }

    for(let i = 0; i < cities.length; i++) {
        let city = cities[i].toLowerCase(); 
        
        if (cache.includes(city)) {
            answer += 1;
            cache = cache.filter(e => e !== city);
            cache.push(city);
        } else {
            if (cache.length >= cacheSize) {
                cache.shift();
            }
            cache.push(city);
            answer += 5;
        }
    }
    return answer;
}