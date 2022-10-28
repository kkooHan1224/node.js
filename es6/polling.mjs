/** structure/polling.mjs */
import Queue from './Queue.mjs'

let queque = new Queue(10); // test queue

const timeout = setTimeout(() => {
    queue.add(() => {
        console.log('1.5초 후 추가');
    });
}, 1500);

const interval = setInterval(() => {
    console.log('1초마다 Polling');
    if (queue.size > 0) {
        let task = queue.delete();
        task();                     // == queue?()(); -> 15번, 16번 라인을 이런식으로 괄호 두개를 통해 간략하게바꿀수 있다는데 이해 못함
    }
}, 1000);

const timeout2 = setTimeout(() => {
    queue.add(() => {
        console.log('실행되지 않습니다');
    });
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immmediate = setImmediate(() => {
    queue.add(() => {
        console.log('즉시 추가');
    });
});

const immmediate2 = setImmediate(() => {
    queue.add(() => {
        console.log('실행되지 않습니다');
    });
});

clearImmediate(immediate2);