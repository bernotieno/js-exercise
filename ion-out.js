function ionOut(s) {
    const regex = /\b(\w+t)ion\b/g;
    
    // Use match with the regex and map the results
    return (s.match(regex) || []).map(word => word.slice(0, -3));
}