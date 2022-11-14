/* https://www.acmicpc.net/problem/10828 */

const fs = require('fs');
const [n, input] = fs.readFileSync('input.txt').toString().trim().split('\n');
const inputArr = input.trim().split(' ')

// let inputArr2 = inputArr.toString().split(' ');
var $a = inputArr[0];
var $b = parseInt(inputArr[1]);

console.log($a);
console.log($b);

var stack = [];
if ($b) {
    stack[$a]($b);
} stack[$a];
