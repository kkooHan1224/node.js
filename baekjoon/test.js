/* https://www.acmicpc.net/problem/10828 */

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
// const [n, input] = fs.readFileSync('input.txt').toString().trim().split('\n');

for (i = 1; i < input.length; i++) {
    const inputArr = input[i].trim().split(' ')

    var firstEl = inputArr[0];
    var secondEl = parseInt(inputArr[1]);

    console.log(firstEl);
    console.log(secondEl);

    var stack = [];
    if (secondEl) {
        stack[firstEl](secondEl);
    } stack[firstEl];
}
