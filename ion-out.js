function ionOut(str) {
    const regex = /\b(t\w*ion)\b/g;

    return (str.match(regex) || [])
        .map(word => word.replace('ion', ''));
}
