function sameAmount(str, regex1, regex2) {
    const countMatches = (string, regex) => {
        const matches = string.match(regex);
        return matches ? matches.length : 0;
    };

    // Compare the match counts of both regexes
    return countMatches(str, regex1) === countMatches(str, regex2);
}