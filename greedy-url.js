function getURL(dataSet) {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    return dataSet.match(urlPattern) || [];
  }
  
  function greedyQuery(dataSet) {
    const urlPattern = /(https?:\/\/[^\s?]+(\?([^&=\s]+=[^&=\s]*&){2,}[^&=\s]+=[^&=\s]*))/g;
    return (dataSet.match(urlPattern) || []).filter(url => {
      const queryCount = (url.match(/&/g) || []).length;
      return queryCount >= 2;
    });
  }
  
  
  function notSoGreedy(dataSet) {
    const urlPattern = /(https?:\/\/[^\s?]+\?([^&=]+=[^&=]*&){1,2}[^&=]+=[^&=]*)/g;
    return (dataSet.match(urlPattern) || []).filter(url => {
      const queryCount = (url.match(/&/g) || []).length;
      return queryCount >= 1 && queryCount <= 2;
    });
  }