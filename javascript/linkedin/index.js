const list = new Array(600).join('1.1').split('.');

function removeItemsFromList() {
    var item = list.pop();

    if (item) {
        setTimeout(removeItemsFromList, 0);
    } else {
        console.log(list);
    }
}

removeItemsFromList();

console.log(list);

// Hoisting

function bigBrother() {
    function littleBrother() {
        return 'it is me!';
    }
    return littleBrother();
    function littleBrother() {
        return 'no me!';
    }
}

// Before running this code, what do you think the output is?
console.log(bigBrother());

// Function declaration - Hoisted
function canada() {
    console.log(`cold!`);
}

// Function expression - Hoisted as undefined
var india = () => {
    console.log(`warm!`);
};

// Function Invocation/Call/Execution
canada();
india();

// Function arguments
function marry(person1, person2) {
    console.log('Arguments', arguments);
    console.log('Arguments array from', Array.from(arguments));
    console.log(`${person1} is married to ${person2}`);
}

// Function spread arguments
function marry(...spreadArgs) {
    console.log('Arguments', spreadArgs);
    console.log('Arguments array from', Array.from(spreadArgs));
    console.log(`${spreadArgs[0]} is married to ${spreadArgs[1]}`);
}

marry('Dog', 'Cat');

// Variable environment
function two() {
    var isValid;
}

function one() {
    var isValid = true;
}

var isValid = false;
one();
