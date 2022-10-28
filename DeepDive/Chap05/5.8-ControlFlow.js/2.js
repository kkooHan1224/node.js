// var num = 2;
// var kind;

// // if 문
// if (num > 0) {
//     kind = '양수';  // 음수를 구별할 수 없다
// }
// console.log(kind);  // 양수


// // if...else 문
// if (num > 0) {
//     kind = '양수';
// }   else {
//     kind = '음수';  // 0은 음수가 아니다
// }
// console.log(kind);  // 양수


// // if...else if 문
// if (num > 0) {
//     kind = '양수';
// }   else if (num < 0) {
//     kind = '음수';
// }   else {
//     kind = '영';
// }
// console.log(kind);  // 양수


// var num = 2;
// var kind;

// if (num > 0)        kind = '양수';
// else if (num < 0)   kind = '음수';
// else                kind = '영';

// console.log(kind);  // 양수





// // x가 짝수이면 '짝수'를 홀수이면 '홀수'를 반환한다.
// var x = 2;
// var result;

// if (x % 2) {    // 2 % 2 는 0이고 0은 false로 취급된다.
//     result = '홀수';
// }   else {
//     result = '짝수';
// }

// console.log(result);    // 짝수





// // x가 짝수이면 '짝수'를 홀수이면 '홀수'를 반환한다.
// var x = 2;

// // 0은 false로 취급된다.
// var result = x % 2 ? '홀수' : '짝수';
// console.log(result);    // 짝수


// var num = 2;

// // 0은 false로 취급된다.
// var kind = num ? (num > 0 ? '양수' : '음수') : '영';
// console.log(kind);  // 양수


// // 월을 영어로 변환한다. (11 -> 'November')
// var month = 11;
// var monthname;

// switch (month) {
//     case 1:
//         monthName = 'January';
//         break;
//     case 2:
//         monthName = 'February';
//         break;
//     case 3:
//         monthName = 'March';
//         break;
//     case 4:
//         monthName = 'April';
//         break;
//     case 5:
//         monthName = 'May';
//         break;
//     case 6:
//         monthName = 'June';
//         break;
//     case 7:
//         monthName = 'July';
//         break;
//     case 8:
//         monthName = 'August';
//         break;
//     case 9:
//         monthName = 'September';
//         break;
//     case 10:
//         monthName = 'October';
//         break;
//     case 11:
//         monthName = 'November';
//         break;
//     case 12:
//         monthName = 'December';
//         break;
//     default:
//         monthName = 'Invalid month';
// }

// console.log(monthName); // Invalid month



// var year = 2000;
// var month = 2;
// var days = 0;

// switch (month) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         days = 31;
//         break;
//     case 4: case 6: case 9: case 11:
//         days = 30;
//         break;
//     case 2:
//         days = ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) ? 29 : 28;
//         break;
//     default:
//         console.log('Invalid month');
// }

// console.log(days);  // 29


// for (var i = 0; i < 2; i++) {
//     console.log(i);
// }


// for (var i = 1; i >= 0; i--) {
//     console.log(i);
// }


// // for (;;) { }    // 무한루프


// for (var i = 1; i <= 6; i++) {
//     for (var j = 1; j <= 6; j++) {
//         if (i + j == 6) console.log(`[${i}, ${j}]`);
//     }
// }
// // 작은 따옴표가 아니라 백틱(`)을 사용하고, ${}안에 변수를 넣어준다.


// var count = 0;

// while (count < 3) {
//     console.log(count);
//     count++;
// }   // 0 1 2

// // while (true) { } // 무한루프



// var count = 0;

// while (true) {
//     console.log(count);
//     count++;
//     if (count == 3) break;
// }


// var count = 0;

// do {
//     console.log(count);
//     count++;
// }   while (count < 3);


// outer: for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < 3; j++) {
//         if (i + j == 3) break outer;
//     }
// }

// console.log('Done!');



// var string = 'Hello World.';
// var index;

// // 문자열은 유사배열이므로 for 문으로 순회할 수 있다.
// for (var i = 0; i < string.length; i++) {
//     // 문자열의 개별 문자가 'l'이면
//     if (string[i] == 'l') {
//         index = i;
//         break;  // 반복문을 탈출한다.
//     }
// }

// console.log(index); // 2

// // 참고로 String.prototype.indexOf 메소드를 사용해도 같은 동작을 한다.
// console.log(string.indexOf('l'));   // 2


var string = 'Hello World.';
var count = 0;

for (var i = 0; i < string.length; i++) {
    if (string[i] !== 'l') continue;
    count++;
}

console.log(count);

// 참고로 String.prototype.match 메소드를 사용해도 같은 동작을 한다.
console.log(string.match(/l/g).length); // 3
