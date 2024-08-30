function sameAmount(str, regex1, regex2) {
    const countMatches = (string, regex) => {
        let count = 0;
        let match;
        const globalRegex = new RegExp(regex.source, regex.flags.includes('g') ? regex.flags : `${regex.flags}g`);

        while ((match = globalRegex.exec(string)) !== null) {
            count++;
            globalRegex.lastIndex = match.index + 1;
        }

        return count;
    };

    return countMatches(str, regex1) === countMatches(str, regex2);
}
