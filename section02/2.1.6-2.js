function findAndSaveUser(Users) {
    Users.findOne({}, (err, user) => {  // 첫 번재 콜백
        if (err) {
            return console.error(err);
        }
        user.name ='zero';
        user.save((err) => { // 두 번째 콜백
            if (err) {
                return console.error(err);
            }
            Users.findOne({ gender:'m'}, (err, user) => {   // 세 번째 콜백
                // 생략
            });
        });
    });
}


/*

class Human {
    consttructor(type = 'human') {
        this.type = type;
    }

    static isHuman(human) {
        return human instanceof Human;
    }

    breathe() {
        console.log('h-a-a-a-m');
    }
}

class Zero extends Human {
    constructor(type, firstName, lastName) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        super.breathe();
        console.log(this.firstName, this.lastName);
    }
}

const newZero = new Zero('human', 'Zero', 'Cho');
newZero.sayName();
console.log(Human.isHuman(newZero));    // true


*/