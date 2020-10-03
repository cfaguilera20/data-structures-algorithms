function countDown(num) {
    if(num <= 0) {
        console.log("All donde!");
        return;
    }

    console.log(num);
    countDown(num--);
}

countDown(10);
