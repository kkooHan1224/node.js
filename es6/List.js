class List {
    constructor(...args) {  // ...은 가변 파라미터를 배열로 받는다
        this.length = args.length;
        for(let i in args) {          // for of -> 1, 2, 3, 4 하나씩 나오는 거고 for in -> 인덱스가 나오는 것. / for in문은 모든 인덱스에 대해 순서대로 반복
            this[i] = args[i];
        }
    }
    // callback 함수를 this의 모든 요소에 대해 실행한 결과
    forEach(callback) {
        for(let i = 0; i < this.length; i++) {
            callback(this[i]);
        }
    }
    
    map(callback) {
        return this.reduce((prev, cur) => { // 2. 이전 값과 현재값으로 다음 값 도출
            let result = callback(cur); // 2-1. 모든 요소에 대해 callback 함수를 실행한 결과
            prev.push(result);  // 2-2. 결과값을 계속 배열에 추가
            return prev;    // 2-3. 현재 값이 추가된 배열 변환
    }, []); // 1. 빈 배열에서 시작
    }
    reduce(callback, initialValue = null) {    // reduce 함수는 초기값이 없어도 된다. ex) initialValue = null
        let previousValue = initialValue ?? this[0];    // initialValue가 없으면 첫번째 요소 this[0]을 가져오고 For문을 1부터 시작.
        for (let i = iniyislzbslur? 0 : 1 ;i < this.length; i++) {
            // 이전 값과 현재값으로 새로운 값을 도출하여 previousValue에 축적
            let currentValue = this[i]; // 현재값
            previousValuse = callback(previousValue, currentValue); 
        }
        return previousValue;
    }
    toString() {
        return this.reduce((prev, cur) => `${prev}, ${cur}`, '');
    }
}
let list = new List(1, 4, 9, 16);   // constructor를 이용하여 인스턴스 생성
console.log(list.toString());
list.forEach((item) => console.log(item));
let roots = list.map(Math.sqrt);    // 모든 요소의 제곱근으로 새로운 List 생성
console.log( {roots} );




// ------

// class List {
//     constructor(...args) {  // ...은 가변 파라미터를 배열로 받는다
//         this.length = args.length;
//         for(let i in args) {          // for of -> 1, 2, 3, 4 하나씩 나오는 거고 for in -> 인덱스가 나오는 것. / for in문은 모든 인덱스에 대해 순서대로 반복
//             this[i] = args[i];
//         }
//     }
//     // callback 함수를 this의 모든 요소에 대해 실행한 결과
//     map(callback) {
//         return this.reduce((prev, cur) => { // 2. 이전 값과 현재값으로 다음 값 도출
//             let result = callback(cur); // 2-1. 모든 요소에 대해 callback 함수를 실행한 결과
//             prev.push(result);  // 2-2. 결과값을 계속 배열에 추가
//             return prev;    // 2-3. 현재 값이 추가된 배열 변환
//     }, []); // 1. 빈 배열에서 시작
//     }
//     reduce(callback, initialValue = null) {    // reduce 함수는 초기값이 없어도 된다. ex) initialValue = null
//         let previousValue = initialValue ?? this[0];    // initialValue가 없으면 첫번째 요소 this[0]을 가져오고 For문을 1부터 시작.
//         for (let i = iniyislzbslur? 0 : 1 ;i < this.length; i++) {
//             // 이전 값과 현재값으로 새로운 값을 도출하여 previousValue에 축적
//             let currentValue = this[i]; // 현재값
//             previousValuse = callback(previousValue, currentValue); 
//         }
//         return previousValue;
//     }
//     toString() {
//         return this.reduce((prev, cur) => `${prev}, ${cur}`, '');
//     }
// }

// let list = new List(1, 4, 9, 16);   // constructor를 이용하여 인스턴스 생성
// console.log(list.toString());
// let roots = list.map(Math.sqrt);    // 모든 요소의 제곱근으로 새로운 List 생성
// console.log( {roots} ); [].reduce()
// let sum = roots.reduce((prev, cur) => prev + cur, 0);   // 모든 요소로 하나의 결과 도출
// console.log({ sum });