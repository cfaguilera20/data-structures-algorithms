//------------------------------
// Flatten
//------------------------------
function flatten(array, result = []) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            flatten(array[i], result);
        } else {
            result.push(array[i]);
        }
    }

    return result;
}

function flattenWithMap(array) {
    return Array.isArray(array) ? [].concat(...array.map(flattenWithMap)) : array;
}

console.log(flatten([1, [2], [3, [[4]]]]));
console.log(flattenWithMap([1, [2], [3, [[4]]]]));


//------------------------------
// Emmiter
//------------------------------

class Emiter {
    constructor() {
        this.events = {};
    }

    on(event, callback) {
        if (this.events[event]) {
            this.events[event].push(callback);
        } else {
            this.events[event] = [callback];
        }
    }

    emit(event, data) {
        if (!this.events[event])
            throw new Exception(`Event ${event} not found!`);

        const fireCallback = (callback) => {
            callback(data);
        }

        this.events[event].forEach(element => fireCallback(element));
    }

    removeListener(event, listenerToRemove) {
        if (!this.events[event])
            throw new Exception(`Event ${event} not found!`);

        this.events[event] = this.events[event].filter((listener) => listener !== listenerToRemove);
    }


}

const emiter = new Emiter();
const typeListener = (type) => console.log(`Click ${type}`);

emiter.on('click', typeListener);
emiter.on('click', () => console.log('another function'));
emiter.on('click', () => console.log('another action'));
emiter.emit('click', 'left');
emiter.emit('click', 'right');

emiter.removeListener('click', typeListener)
console.log('emiter.removeListener');

emiter.emit('click', 'left');

//------------------------------
// Array new index
//------------------------------
function changeIndex(array, index) {
    let map = {};
    for (let i = 0; i < array.length; i++) {
        map[i] = array[i];
    }

    for (let i = 0; i < index.length; i++) {
        let num = map[i];
        let pos = index[i];
        array[pos] = num;
    }

    return array;
}

const changed = changeIndex([1, 2, 3, 4, 5], [0, 2, 4, 1, 3]);
console.log(changed);

//-------------------------
// Previous question
//-------------------------
// Given input:
// could be potentially more than 3 keys in  the object above
items = [
    { color: 'red', type: 'tv', age: 18 },
    { color: 'silver', type: 'phone', age: 20 },
    { skin: 'silver', name: 'phone', age: 20 },
    { color: 'red', type: 'phone', age: 20 }
];

excludes = [{ k: 'color', v: 'silver' }, { k: 'type', v: 'tv' },]

// O(n * e) complexity | O(1) space
function excludeItems(items, excludes) {
    excludes.forEach(pair => {
        items = items.filter(item => item[pair.k] !== pair.v);
    });
    return items;
}

console.log('excludeItems', excludeItems(items, excludes));
// 1. Describe what this function is doing...
// 2. What is wrong with that function ?
// 3. How would you optimize it ?

function excludeItems2(items, excludes) {
    let result = items.filter(item => {
        for (let e = 0; e < excludes.length; e++) {
            let pair = excludes[e];
            if ((item[pair.k] === pair.v)) {
                return false;
                // moving to next item. no need to see next excluded element
            }
        }
        return true;
    });
    return result;
}

console.log('excludeItems2', excludeItems2(items, excludes));

//-----------------------
// Sum two numbers
//-----------------------
function sum(a, b) {
    let result = [];
    let carrying = false;
    let num;
    const getNextInt = (str) => parseInt(str.substring(str.length - 1) || 0);
    while (a.length || b.length) {
        num = getNextInt(a) + getNextInt(b) + (+carrying);
        carrying = num >= 10;
        num = carrying ? num - 10 : num;
        //result = `${num}${result}`;
        result.push(num);
        a = a.slice(0, -1);
        b = b.slice(0, -1);
    }
    if (carrying)
        result.push(1);

    return result.reverse().join('');
}

console.log(sum('123123', '5523783'), '5646906');
console.log(sum('0', '0'), '0');
console.log(sum('0', '10'), '10');
console.log(sum('10', '19'), '29');
console.log(sum('999', '999'), '1998');


//---------------
// Pointers
//---------------
// O(N) time | O(1) space
function sumZeroPointers(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum == 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right -= 1;
        } else {
            left += 1;
        }
    }
}

//---------------
// Multiple Pointers
//---------------


//---------------
// Sliding window
//---------------
// O(N) time | O(1) space
function maxSubarraySumRefactor(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (num > arr.length) {
        return null;
    }

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}


function findLongestSubarrayBySum(arr, target) {
    let result = [-1, -1];
    let sum = 0;
    let left = 0;
    let right = 0;

    while (right < arr.length) {
        sum += arr[right];
        while (left < right && sum > target) {
            sum -= arr[left++];
        }

        if (sum == target && (result[1] - result[0] < right - left)) {
            result = [left, right];
        }
        right++;
    }
    return result;
}

console.log(findLongestSubarrayBySum([10, 5, 2, 7, 1, 9], 15));


function countUniqueValues(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log('countUniqueValues', countUniqueValues([1, 1, 1, 1, 2, 2, 3, 4, 4, 5, 6, 6]), 6);




class Emmiter {
    construct() {
        this._events = {};
    }

    subscribe(name, callback) {
        if (this._events[name]) {
            this._events[name].set(callback, true);
        } else {
            const map = new Map();
            map.set(callback, true);
            this._events[name] = map;
        }

        const api = {
            // O(N) => O(1)
            release: () => {
                try {
                    this._events[name].remove(callback);
                } catch (e){
                    throw new Exception(`${event} dosen't have this subs.`);
                }
            }
        }

        return api;
    }

    emit(name, ...arg) {
        if (!this._events[name])
            throw new Exception(`${event} dosen't exist`);

        this._events[name].forEach((value, key) => key(...arg));
    }

}

const emitter = new Emitter();

// 1. Support subscribing to events.
const sub = emitter.subscribe('event_name', callback);
const sub2 = emitter.subscribe('event_name', callback);

// 2. Support emitting events.
// This particular example should lead to the `callback` above being invoked with `first_value` and `second_value` as parameters.
emitter.emit('event_name', 'first_value', 'second_value');

// 3. Support unsubscribing existing subscriptions by releasing them.
sub.release(); // `sub` is the reference returned by `subscribe` above
