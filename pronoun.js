function pronoun(str) {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    const result = {};
  
    const lowercaseStr = str.toLowerCase();
  
    const words = lowercaseStr.match(/\b\w+\b/g);
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (pronouns.includes(word)) {
        if (!result[word]) {
          result[word] = { word: [], count: 0 };
        }
        result[word].count++;
        
        if (i < words.length - 1 && !pronouns.includes(words[i + 1])) {
          result[word].word.push(words[i + 1]);
        }
      }
    }
  
    return result;
  }