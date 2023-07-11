const input = Number(require('fs').readFileSync('/dev/stdin').toString());
let count = 1;
let num = 666;
while (count !== input) {
	num++;
	if (num.toString().match(/666/g)) count++;
}
console.log(num);