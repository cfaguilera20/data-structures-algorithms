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


// Given input:
// could be potentially more than 3 keys in  the object above
items = [
    { color: 'red', type: 'tv', age: 18 },
    { color: 'silver', type: 'phone', age: 20 },
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
    let result = items.filter(item =>  {
       for(let e = 0; e < excludes.length; e++) {
           let pair = excludes[e];
           if((item[pair.k] === pair.v)) {
               return false;
               // moving to next item. no need to see next excluded element
           }
       }
       return true;
   });
   return result;
}

console.log('excludeItems2', excludeItems2(items, excludes));

