const condition = Math.random() < 0.5; // true 면 resolve, false면 reject      -> math.random()을 쓰면 0~1 숫자가 나오고 0.5보다 작을 확률은 딱 50%다.
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});
// 다른 코드가 들어갈 수 있음

// promise
//     .then((message) => {
//         return new Promise((resolve, reject) => {
//             resolve(message);
//         });
//     })
//     .then((message2) => {
//         console.log(message2);
//         return new Promise((resolve, reject) => {
//             resolve(message2);
//         });
//     })
//     .then((message3) => {
//         console.log(message3);
//     })
//     .catch((error) => {
//         console.error(error);
//     });



// 위 코드를 이렇게 수정해도 된다.
    promise
    .then((message) => {
        return new Promise((resolve) => {
            resolve(message);
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve) => {
            resolve(message2);
        });
    })
    .then(console.log)
    .catch(console.error);
