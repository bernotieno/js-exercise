function all(obj) {
    // Get the entries (key-value pairs) of the object
    const entries = Object.entries(obj);
  
    // Return an empty object immediately if the input object is empty
    if (entries.length === 0) return Promise.resolve({});
  
    // Create an array of promises, each resolving to [key, resolvedValue]
    const promises = entries.map(([key, value]) => 
      // Ensure all values, whether synchronous or promise, are wrapped in Promise.resolve
      Promise.resolve(value).then(resolvedValue => [key, resolvedValue])
    );
  
    // Use Promise.all to resolve all promises in the array
    return Promise.all(promises).then(resolvedEntries => 
      // Convert the resolved entries back into an object
      Object.fromEntries(resolvedEntries)
    );
  }
  