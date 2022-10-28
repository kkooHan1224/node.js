/** ch03/3.4/globalB.js */
const A = require('./globalA');

global.message = '안녕하세요';
console.log(A());

// globalB.js 파일에서 global.message를 수정하면 globalA.js파일에도 반영이 된다. '전역변수'