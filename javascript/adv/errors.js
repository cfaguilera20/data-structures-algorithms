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
