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
