function findExpression(number) {
    const add4 = 4;
    const mul2 = 2;

    function findSequence(current, target, expression) {
        if (current === target) {
            return expression;
        }
        if (current > target) {
            return undefined;
        }

        const addResult = findSequence(current + add4, target, expression + " +4");
        if (addResult !== undefined) {
            return addResult;
        }

        const mulResult = findSequence(current * mul2, target, expression + " *2");
        if (mulResult !== undefined) {
            return mulResult;
        }

        return undefined;
    }

    const result = findSequence(1, number, "1");
    return result !== "1" ? result : undefined;
}