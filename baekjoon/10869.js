// /* https://www.acmicpc.net/problem/10869 */


const fs = require('fs');
let [a, b] = fs.readFileSync('input.txt').toString().split(' ');
a = parseInt(a);
b = parseInt(b);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);


// Math.floor 대신 (a - a % b) / b를 이용해도 된다.
