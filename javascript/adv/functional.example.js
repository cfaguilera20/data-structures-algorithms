const user = {
    name: "Carlos Aguilera",
    active: true,
    cart: [],
    purchases: []
}

// Add items to cart
// Add 3% taxt to item in cart
// Buy item: cart -> purchases
// Emtoy cart

let shopHistory = [];

// We can use a library.
const compose = (f, g) => (...args) => f(g(...args));

// Check reduce
// let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//     (accumulator, currentValue) => accumulator.concat(currentValue),
//     []
// )

function purchaseItem(...fns) {
    return fns.reduce(compose);
}

function addItemToCart(user, item) {
    shopHistory.push(user);
    const updateCart = user.cart.concat(item);
    return Object.assign({}, user, { cart: updateCart });
}

function applyTaxToItems(user) {
    shopHistory.push(user);
    const { cart } = user;
    const taxRate = 1.3;
    const updatedCart = cart.map((item) => {
        return {
            name: item.name,
            price: item.price * taxRate,
        }
    })
    return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
    shopHistory.push(user);
    return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
    shopHistory.push(user);
    return Object.assign({}, user, { cart: [] });
}

const user2 = purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, { name: 'laptop', price: 200 });

console.log(shopHistory);
console.log(user2);
