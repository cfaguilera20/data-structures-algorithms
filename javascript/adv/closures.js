//------------------------------
// Higher Order Functions - Returns another functon
//------------------------------

// const multiplyBy = function (base) {
//     return function (num) {
//         return base * num;
//     }
// }

const multiplyBy = (base) => (num) => base * num;
const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);
console.log(multiplyByTwo(10));
console.log(multiplyByFive(10));

//------------------------------
// Closures
//------------------------------
function a() {
    let grandpa = "grandpa";
    return function b() {
        let father = "father";
        return function c() {
            let son = "son";
            return `${grandpa} > ${father} > ${son}`;
        }
    }
}
const one = a()
const two = one();
const three = two();
console.log(one);
console.log(two);
console.log(three);;

function callMeMaybe() {
    setTimeout(function () {
        console.log(callMe);
    }, 3000);
    // When the function is called it's hoisted,
    // but when the event loop pushes it to the call stack the values is defined.
    const callMe = "Hi! I am now here!";
}
callMeMaybe();


//------------------------------
// Closures - Memory efficient
//------------------------------
function heavyDuty(index) {
    const bigArray = Array.from(Array(10000).keys());
    return bigArray[index];
}
console.time('Function #1');
console.log(heavyDuty(700));
console.log(heavyDuty(7681));
console.log(heavyDuty(7681));
console.log(heavyDuty(7681));
console.log(heavyDuty(7681));
console.timeEnd('Function #1');

function heavyDutyImproved() {
    const bigArray = Array.from(Array(10000).keys());
    return function (index) {
        return bigArray[index];
    }
}
console.time('Function #2');
getHeavyDuty = heavyDutyImproved();
console.log(getHeavyDuty(700));
console.log(getHeavyDuty(7681));
console.log(getHeavyDuty(7681));
console.log(getHeavyDuty(7681));
console.log(getHeavyDuty(7681));
console.timeEnd('Function #2');

//------------------------------
// Closures - Encapsulation
//------------------------------

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    let showCounter = false;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return 'boom!'
    }
    const counter = (status) => {
        showCounter = status;
    }
    const passTime = () => {
        timeWithoutDestruction++;
        if (showCounter) {
            console.log('Peace time:', timeWithoutDestruction);
        }

        if (timeWithoutDestruction === 5) {
            clearInterval(interval);
            console.log('Nuclear button deactivated!');
        }
    }
    const interval = setInterval(passTime, 1000);

    const api = {
        launch,
        totalPeaceTime,
        counter,
    }

    return api;
}
const nuclearButton = makeNuclearButton();

const array = [1, 2, 3, 4, 5];
// We can declare let i = 0, beacuse of blocke scope
for (var i = 0; i < array.length; i++) {
    // When the console.log is executed the value of i is 5.
    // setTimeout(function () {
    //     console.log("At index ", i);
    // }, 3000);
    (function (closureI) {
        setTimeout(function () {
            console.log("At index ", closureI);
        }, 3000);
    })(i);

}
