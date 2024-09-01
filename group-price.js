function groupPrice(str) {
    // Regular expression to match prices
    const priceRegex = /(\$|USD)(\d+)\.(\d{2})\b/g;
    
    const results = [];
    
    let match;
    while ((match = priceRegex.exec(str)) !== null) {
        // Extract the full match and the captured groups
        const [fullMatch, currency, dollars, cents] = match;
        
        results.push([fullMatch, dollars, cents]);
    }
    
    return results;
}