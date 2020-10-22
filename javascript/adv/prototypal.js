const robot = {
    name: "Carlos",
    fire: true,
    fight() {
        return 5;
    },
    talk() {
        return `I'am ${this.name} the robot!`;
    }
}
console.log(robot.talk());

const enemy = {
    name: 'Aguilera',
    fight() {
        return 1;
    }
}
// const talkEnemy = robot.talk.bind(enemy);
// console.log(talkEnemy());

enemy.__proto__ = robot;
console.log(enemy.talk());
console.log('fight', enemy.fight()); // Looks for the method in it's prototype.
console.log('isPrototypeOf', robot.isPrototypeOf(enemy));

//------------------------
// Props
//------------------------

console.log('-----------------------');
for (let prop in enemy) {
    console.log('enemy.hasOwnProperty', prop, enemy.hasOwnProperty(prop));
}


//-----------------------------
// Prototype & __proto__
//-----------------------------
console.log('-----------------------');
const array = [];
console.log(array.__proto__);
console.log(Array.prototype);
console.log(Array.prototype.__proto__);
// It works like a linked list, until we have the tail.
console.log(Array.prototype.__proto__.__proto__);
console.log(Array.prototype.isPrototypeOf(array));


//------------------------------
// Creating our own prototyoes
//------------------------------
console.log('-----------------------');
let human = {
    mortal: true
};
let carlos = Object.create(human);
console.log(carlos);
carlos.age = 34;
console.log(carlos);
console.log('carlos.mortal', carlos.mortal);
console.log('carlos.__proto__', carlos.__proto__);


//------------------------------
// Only function have prototype
//------------------------------
const obj = {};
let func = {};
console.log('typeof obj', typeof obj);
console.log('typeof func', typeof func);
console.log('obj.__proto__', obj.__proto__);
console.log('func.__proto__', func.__proto__);

//------------------------------
// Modify Date
//------------------------------

Date.prototype.lastYear = function () {
    return parseInt(this.getFullYear()) - 1;
}
let date = new Date('1990-10-10');
console.log(date.lastYear());

let data = [1, 2, 3];
console.log(data.map());

//------------------------------
// Create our own bind
//------------------------------
Function.prototype.bind = function (whoIsCallingMe) {
    const self = this;
    return function () {
        return self.apply(whoIsCallingMe, arguments);
    };
}
