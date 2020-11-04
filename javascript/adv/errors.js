const myError = new Error('Opss');

// It stops the execution
// throw myError

console.log('myError.stack', myError.stack);

//------------------------
// Try & Catch
//------------------------
function fail(fail) {
    try {
        if (fail) throw new Error('Failed!');
        console.log('This works!');
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
    } finally {
        console.log('Finally!');
    }
}

fail(false);
fail(true);

setTimeout(function () {
    // This dosen't throws an error because it runs in the Web APIs
    fakeVariableInWebAPI;
}, 0);

// We hace to use a try catch to get the error.
try {
    setTimeout(function () {
        fakeVariableInWebAPI;
    }, 0);
} catch (e) {
    console.log(e);
}


Promise
    .resolve('asyncfail')
    .then(response => {
        // throw new Error("Failed promise!");

        // This is not handleded
        Promise.resolve().then(() => {
            throw new Error("Another error in promise!");
        }).catch(console.log);

        return 5;
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        return error;
    });


//------------------------
// Try & Catch - Async
//------------------------
(async function () {
    try {
        await Promise.reject('oops in try catch!');
    } catch (error) {
        console.log(error)
    }
    console.log('is this still good?')
})();
