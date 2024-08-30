function ionOut(str) {
    const regex = /\b(t\w*ion)\b/g;

    const matches = str.match(regex) || [];

    return matches.map(word => word.replace('ion', ''));
}
