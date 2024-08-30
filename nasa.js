function nasa(N) {
    let result = [];

    for (let i = 1; i <= N; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("NASA");
        } else if (i % 3 === 0) {
            result.push("NA");
        } else if (i % 5 === 0) {
            result.push("SA");
        } else {
            result.push(i);
        }
    }

    return result.join(" ");
}
