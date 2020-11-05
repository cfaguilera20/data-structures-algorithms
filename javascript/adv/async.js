// Parallel, sequencial, race
const promisify = (item, delay) =>
    new Promise((resolve) =>
        setTimeout(() =>
            resolve(item), delay));


const a = () => promisify('a', Math.random() * 1000);
const b = () => promisify('b', Math.random() * 1000);
const c = () => promisify('c', Math.random() * 1000);

async function parallel() {
    const promises = [a(), b(), c()];
    const [out1, out2, out3] = await Promise.all(promises);
    return `Parallel is done: ${out1} ${out2} ${out3}`;
}
parallel().then(console.log);

async function race() {
    const promises = [a(), b(), c()];
    const out1 = await Promise.race(promises);
    return `Race is done: ${out1} `;
}
race().then(console.log);

async function sequence() {
    const out1 = await a();
    const out2 = await b();
    const out3 = await c();

    return `Sequence is done: ${out1} ${out2} ${out3}`;
}
sequence().then(console.log);

const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 2000));

// Promise.all([promiseOne, promiseTwo]).then(console.log);
Promise.allSettled([promiseOne, promiseTwo]).then(console.log);
