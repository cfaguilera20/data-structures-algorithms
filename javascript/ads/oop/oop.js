//------------------------------
// Factory functions
//------------------------------
const elfFunctions = {
    attack() {
        return this.name + ' attack with ' + this.weapon;
    }
}
function createElf(name, weapon) {
    // This is a prototypal inherence
    const newElf = Object.create(elfFunctions);
    newElf.name = name;
    newElf.weapon = weapon;

    // We can remove these lines because of Object.create()
    // return {
    //     //ES5
    //     name: name,
    //     //ES6
    //     weapon,
    //     // If we create 1000 objects we will have 1000 functions in memory
    //     // attack() {
    //     //     return this.name + ' attack with ' + weapon;
    //     // }
    // }

    return newElf;
}

const carlos = createElf('Carlos', 'fire');
const aguilera = createElf('Aguilera', 'stones');

// We can remove these lines because of Object.create()
// carlos.attack = elfFunctions.attack;
// aguilera.attack = elfFunctions.attack;

console.log(carlos.attack());
console.log(aguilera.attack());
