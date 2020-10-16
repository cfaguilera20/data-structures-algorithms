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
// first();


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
// getrecipe();

// ES6 - Promise: Pending, Settled/Resolved, Fullfilled, Rejected

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (getRandomInt(10)) {
            resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        } else {
            reject("Server error.")
        }
    }, 1500);
});

const getRecipe = recipeId => {
    return new Promise((resolve, rejected) => {
        setTimeout((id) => {
            const recipe = { title: "Fresh tomato", publisher: "Carlos" };
            resolve(`${id}: ${recipe.title}`);
        }, 1500, recipeId);
    });
}

// getIds
//     .then((recipes) => {
//         console.log(recipes);
//         return getRecipe(recipes[3]);
//     }).
//     then((recipe) => {
//         console.log(recipe);
//     })
//     .catch((error) => console.log(error));

// Consuming Promises with async/await
async function getRecipiesAW() {
    const IDs = await getIds;
    const recipe = await getRecipe(IDs[3]);
    return recipe;
}

// getRecipiesAW().then(result => {
//     console.log(result);
// });

// Consuming an API with Fetch & Promises.
function getWeather(place) {
    fetch(`https://www.metaweather.com/api/location/${place}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const today = data.consolidated_weather[0];
            console.log(`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`);
        })
        .catch(error => console.log(error));
}


getWeather(116545);
getWeather(44418);
getWeather(2487956);

// Consuming an API with Async & Await
async function getWeatherAW(place) {
    try {
        const response = await fetch(`https://www.metaweather.com/api/location/${place}`);
        const data = await response.json();
        const today = data.consolidated_weather[0];
        console.log(`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`);
        return data;
    } catch (error) {
        console.log(error);
    };
}

getWeatherAW(116545);
getWeatherAW(44418);
getWeatherAW(2487956).then(data => console.log(data));
