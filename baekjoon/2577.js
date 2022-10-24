let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");
// 백준 입력 코드 (구글에 '백준 node.js 입력' 이런식으로 검색해서 복붙해오심)

let mul = parseInt(input[0]) * parseInt(input[1]) * parseInt(input[2]);
let counting = new Array(10);   // 길이가 10인 배열을 만들고
counting.fill(0);   // 전부 0으로 채운다.
while(mul) {
    counting[mul % 10]++;
    mul /= 10;
    mul = Math.floor(mul);
}
for (let count of counting) {
    console.log(count);
}

// 중간중간 VSCode로 테스트 하시면서 스탭바이스탭으로 푸심.
