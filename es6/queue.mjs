const createQueue = (max) => ({
    array: new Array(max),
    size: 0,
    front: -1,
    rear: -1,
    add(value) {
      if (this.size == max) {
        throw Error('The queue is full.');
      }
      this.size += 1;
      this.rear = (this.rear + 1) % max; // 최대치 이상으로 넘지 않게 '%'연산자를 통해 rear를 조정해줌
      this.array[this.rear] = value;
    },
    delete() {
      if (this.size == 0) {
        throw Error('The queue is empty.');
      }
      this.size -= 1;
      this.front = (this.front + 1) % max;
      return this.array[this.front];
    },
});

  let queue1 = createQueue(3);
  
  queue1.add(4);
  queue1.add(6);
  queue1.add(1);
  let data = queue1.delete(); // 4
  console.log(data);
  queue1.add(9);
  console.log(queue1.delete()); // 6
  console.log(queue1.delete()); // 1
  console.log(queue1.delete()); // 9
  
  if (queue.size > 0) { // is not empty
    console.log(queueDelete(queue1));
  } else {
    console.warn('The queue is empty');
  }
  
  let queue2 = createQueue(2);
  queue2.add(1);
  queue2.add(2);
  queue2.add(8);  // error