function permute(arr, m = []) {
    if (arr.length === 0) {
        return [m];
    }

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        result = result.concat(permute(curr, m.concat(next)));
    }

    return result;
}

function solution(k, dungeons) {
    const permutations = permute(dungeons);
    let maxCount = 0;

    permutations.forEach(dungeon => {
        let currentK = k; 
        let count = 0;

        for(let i = 0; i < dungeon.length; i++) {
            if(currentK >= dungeon[i][0]) {
                currentK -= dungeon[i][1];
                count++;
            }
        }

        maxCount = Math.max(maxCount, count); 
    });

    return maxCount === 0 ? -1 : maxCount;

}

