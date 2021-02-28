/**
 * https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem
 * TODO: Improve the performance because is not passing 2 tests
 */
function processData(input) {
    let lines = input.split("\n");
    for(let i = 1; i < lines.length; i++) {
        let query = lines[i].split(' ');
        
        if(query[0] === '1') {
            enqueue(query[1])
        }
        if(query[0] === '2') {
            dequeue()
        }
        if(query[0] === '3') {
            print();
        }
    }
}

importStack = [];
exportStack = [];

function enqueue(data) {
    while(exportStack.length !== 0) {
        importStack.push(exportStack.pop());        
    }
    
    importStack.push(data);
} 
function dequeue() {
    while(importStack.length !== 0) {
        exportStack.push(importStack.pop());        
    }

    return exportStack.length ? exportStack.pop() : undefined;
} 
function print() {
    let data;
    if(exportStack.length) {
        data = exportStack[exportStack.length - 1]
    } else {
        data = importStack[0];
    }
    
    console.log(data);
}    
