const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

promise
    .then((message) => {
        console.log(message);   // 성공(resolve)한 경우 실행
    })
    .catch((error) => {
        console.error(error);   // 실패(reject)한 경우 실행
    });



/*


var Human = function(type) {
    this.type = type || 'human';
};

Human.isHuman = function(human) {
    return human instanceof Human;
}

Human.prototype.breathe = function() {
    console.log('h-a-a-a-m');
};

var Zero = function(type, firstName, lastName) {
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
};

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero;  // 상속하는 부분
Zero.prototype.sayName = function() {
    this.breathe();
    console.log(this.firstName, this.lastName);
};
var oldZero = new Zero('human', 'Zero', 'Cho');
oldZero.sayName();
console.log(Human.isHuman(oldZero));    // true

*/