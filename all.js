function all(obj) {
    // Get the entries (key-value pairs) of the object
    const entries = Object.entries(obj);
    
    // Create an array of promises, each resolving to [key, value]
    const promises = entries.map(([key, value]) => 
      Promise.resolve(value).then(resolvedValue => [key, resolvedValue])
    );
  
    // Use the built-in Promise.all on our array of promises
    return Promise.all(promises).then(resolvedEntries => 
      // Convert the resolved entries back into an object
      Object.fromEntries(resolvedEntries)
    );
  }