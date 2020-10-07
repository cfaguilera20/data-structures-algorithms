let multiplier = (x) => (y) => x * y;
let multiply2 = multiplier(2);
let multiply10 = multiplier(10);

console.log(multiply2(10));
console.log(multiply10(10));

// ES5
var button5 = {
    class: '.red',
    click: function () {
        document.querySelector(this.class)
            .addEventListener('click', function () {
                alert(this.class); // This is undefined becasue the lexical context of regular functions is the window.
            });
    }
}

// ES6
var button6 = {
    class: '.green',
    click: function () {
        document.querySelector(this.class)
            .addEventListener('click', () => {
                alert(this.class); // This is .green becasue the lexical context of arrow functions is it's container.
            });
    }
}

button6.click();
