// 프로그래머스 연속된 수의 합 //

function solution(num, total) {
    var answer = [];
    if(num % 2) {
        for (i=0; i<num; i++) {
        answer.push(Math.floor(total/num) + (num-num%2)/2-i);
        }
    } else {
        for (i=0; i<num; i++) {
        answer.push(Math.floor(total/num) + (num/2)-i);
        }
    }
    answer.sort(function (a, b) {
        return a - b;
    });
    return answer;
}



// 예시를 들어보자. 
// "num = 1, total = 7" => [7]을 출력.
// "num = 2, total = 13" => [6, 7]을 출력
// "num = 3, total = 15" => [4, 5, 6]을 출력.
// "num = 4, total = 10" => [1, 2, 3, 4]을 출력.
// "num = 5, total = 25" => [3, 4, 5, 6, 7]을 출력.
// "num = 6, total = 45" => [5, 6, 7, 8, 9, 10]을 출력.



// 여태까지 했던 예제에서 얻은 아이디어로 Math.floor을 사용해야될 것 같았다.
// 그래서 Math.floor(total/num)로 나와야하는 결과값의 배열을 표현해보았다.

// Math.floor(7/1) = 7 -> [7]
// => [Math.floor(7/1)]
// Math.floor(13/2) = 6 -> [6, 7] 
// => [Math.floor(13/2), Math.floor(13/2)+1]
// Math.floor(15/3) = 5 -> [4, 5, 6] 
// => [Math.floor(15/3)-1, Math.floor(15/3), Math.floor(15/3)+1]
// Math.floor(10/4) = 2 -> [1, 2, 3, 4] 
// => [Math.floor(10/4)-1, Math.floor(10/4), Math.floor(10/4)+1, Math.floor(10/4)+2]
// Math.floor(25/5) = 5 -> [3, 4, 5, 6, 7]
// => [Math.floor(25/5)-2, Math.floor(25/5)-1, Math.floor(25/5) ,Math.floor(25/5)+1, Math.floor(25/5)+2]
// Math.floor(45/6) = 7 -> [5, 6, 7, 8, 9, 10]
// => [Math.floor(30/6)-2, Math.floor(30/6)-1, Math.floor(30/6), Math.floor(30/6)+1, Math.floor(30/6)+2, Math.floor(30/6)+3]



// Math.floor(total/num)을 가독성을 위해 x라고 정했다.

// x = Math.floor(total/num)
// num = 1 -> x
// num = 3 -> x-1, x, x+1   => 3x
// num = 5 -> x-2, x-1, x, x+1, x+2     => 5x
// num = 7 -> x-3, x-2, x-1, x, x+1, x+2, x+3   => 7x

// num = 2 -> x, x+1    => 2x + 1
// num = 4 -> x-1, x, x+1, x+2  => 4x + 2
// num = 6 -> x-2, x-1, x, x+1, x+2, x+3    => 6x + 3
// num = 8 -> x-3, x-2, x-1, x, x+1, x+2, x+3, x+4    => 8x + 4

// 홀수끼리 짝수끼리의 공통된 특징이 보이기에 끼리끼리 모아뒀다.



// num이 짝수일때 x+(num/2)가 마지막 숫자
// 마지막 숫자를 y라고 하고, y기준 num개가 출력된다. (y-num+1), (y-num+2), (y-num+3), ... y (총 num개)
// y = Math.floor(total/num) + (num/2)
// num = 2 -> y, y-1
// num = 4 -> y, y-1, y-2, y-3

// num이 홀수일때 ('짝수일때~' 참고해서 아이디어가 떠올랐다.) x+(num-num%2)/2가 마지막 숫자(몫을 구하도록 하는 이전 예제에서 아이디어 얻음)
// 마지막 숫자를 y라고 하고, y기준 num개가 출력된다. (y-num+1), (y-num+2), (y-num+3), ... y (총 num개)
// y = Math.floor(total/num) + (num-num%2)/2
// num = 3 -> y, y-1, y-2



// num -> 홀수 1: x, 3: 3x, 5: 5x => 3: x-1 x x+1 / 5 : x-2, x-1, x, x+1, x+2
// num -> 짝수 2: 2x + 1, 4: 2 x (2x + 1), 6: 3 x (2x + 1) / 



// if문 구상하기

/* 방법1.
if(num % 2 = 1) {
    홀수일때 솰라솰라   
} else {
    짝수일때 솰라솰라2
}
*/

/* 방법2.
if(num % 2) {
    홀수일때 솰라솰라 (왜냐하면 1이기 때문에 true)
} else {
    짝수일때 솰라솰라2 
}
*/



// 한번 출력값 테스트 해보기

/* 가독성을 위해 y로 표현
if(num % 2) {
    y = Math.floor(total/num) + (num-num%2)/2
    for (i=0; i<num; i++) {
        answer.push(y-i);
    }
} else {
    y = Math.floor(total/num) + (num/2)
    for (i=0; i<num; i++) {
        answer.push(y-i);
    }
}
*/

/* y를 위에 적어둔 대로 복붙.
if(num % 2) {
    for (i=0; i<num; i++) {
        answer.push(Math.floor(total/num) + (num-num%2)/2-i);
    }
} else {
    for (i=0; i<num; i++) {
        answer.push(Math.floor(total/num) + (num/2)-i);
    }
}
*/

// 결과는 잘 나왔는데 오름차순 배열이 안돼서 틀렸었다.



// 배열로 어떻게 출력하지? => arr.push();
/* 
answer.sort(function (a, b) {
    return a - b;
});
*/
// 인터넷에서 찾아본 배열 오름차순 방법.



// 어떻게 해결할지 떠오른 아이디어 정리.
// 오름차순으로 정렬은 어떻게 하지? JS에 그런 함수가 있나 찾아보자.
// 순서대로만 넣으면 될거 같긴한데 한번 찾아는 보자. -> 막상 해보니 내가 떠올린 방법이 역순이라 관련 함수를 찾아서 사용했다.