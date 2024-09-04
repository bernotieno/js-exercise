function flow(funcs) {
    return function(...args) {
        return funcs.reduce((result, func, index) => {
            return index === 0 ? func(...result) : func(result);
        }, args);
    };
}