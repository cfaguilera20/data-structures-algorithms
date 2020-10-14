// Asynchronous functions
const second = async () => {
    await setTimeout(() => {
        console.log("Async hey");
    }, 2000);
}
const first = () => {
    console.log("Hello there");
    second();
    console.log("The end");
}
first();


function getrecipe() {
    setTimeout(() => {
        const recipeID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        console.log(recipeID);

        setTimeout(id => {
            const recipe = { title: "Fresh tomato", publisher: "Carlos" };
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe2 = { title: "Fresh tuna", publisher: "Carlos" };
                console.log(recipe2);
            }, 1000, recipe.publisher);

        }, 1000, recipeID[2]);

    }, 1500);
}

getrecipe();
