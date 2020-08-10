function minimumBribes(q) {
    let swap = 0;
    let bribes;
    let pos = 0;

    for (let i = q.length - 1; i >= 0; i--) {
        let j = 0;

        bribes = q[pos] - (pos + 1);

        if (bribes > 2) {
            console.log("Too chaotic");
            return;
        }

        if (q[i] - 2 > 0) {
            j = q[i] - 2;
        }

        while (j <= i) {
            if (q[j] > q[i]) {
                swap++;
            }
            j++;
        }

        pos++;
    }

    console.log(swap);

}

minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])
