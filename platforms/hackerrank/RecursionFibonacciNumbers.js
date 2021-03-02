/**
 * https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem
 */
function fibonacci(n) {

    if(n === 0 || n === 1) {
        return n;
    }
    
    return fibonacci(n - 1) + fibonacci(n - 2);

}

function fibonacci(n) {

    let lastTwo = [0, 1];
    let counter = 3;
    while(counter <= n) {
        let nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter++;
    }
    
    return n === 1 ? lastTwo[0] : lastTwo[1];
}
