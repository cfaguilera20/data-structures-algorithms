// Global
//      Module
//          Function
//              Block

// Global
function fight() {
    return 'Fight !!'
}


// IIFE
const myModule = (function () {
    function fight(player1, player2) {
        const attack1 = Math.floor(Math.random() * player1.length);
        const attack2 = Math.floor(Math.random() * player2.length);
        return attack1 > attack2 ? `${player1} wins!` : `${player2} wins!`
    }

    return {
        fight
    }
})();


console.log(myModule.fight('carlos', 'aguilera'));
console.log(myModule.fight('carlos', 'aguilera'));
console.log(fight());

