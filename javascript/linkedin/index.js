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
