/* Queue.js */
const max = 3;
let queue = new Array(max);
// queue.max = max; // == queue.length
queue.size = 0;
queue.front = -1;
queue.rear = -1;

// add, delete 대신 push? pop을 사용하기도 한다.

function queueAdd(value) {
    if (queue.size == queue.length) {
        throw Error('The queue is full.');
    }
    queue.size += 1;
    queue.rear = (queue.rear + 1) % queue.length;
    // console.log({queue.rear});
    queue[queue.rear] = value;
}

function queueDelete() {
    if (queue.size == 0) {  
        throw Error('The Queue is empty.');
    }
    queue.size -= 1;
    queue.front = (queue.front + 1) % queue.length;
    return queue[queue.front] // return 해버리면 접근을 안할 것이다. 그래서 따로 지우는 것은 안하겠다.
    
}

queueAdd(4);
queueAdd(6);
queueAdd(1);
let data = queueDelete();
console.log(data);  // 먼저 넣은 값이 먼저 출력된다.
queueAdd(9);
console.log(queueDelete());
console.log(queueDelete());
console.log(queueDelete()); // 비어있으므로 위에 throw에서 설정한 'The Queue is empty.' 에러가 뜰 것이다.

if (queue.size > 0) { // is not empty
    console.log(queueDelete());
} else {
    console.warn('The queue is empty.');
}