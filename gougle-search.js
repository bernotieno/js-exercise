async function queryServers(serverName, q) {
    const urls = [
      `/${serverName}?q=${q}`,
      `/${serverName}_backup?q=${q}`
    ];
  
    return Promise.race(urls.map(url => getJSON(url)));
  }
  
  async function gougleSearch(q) {
    const servers = ['web', 'image', 'video'];
    
    const timeout = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('timeout')), 80);
    });
  
    try {
      const results = await Promise.race([
        Promise.all(servers.map(server => queryServers(server, q))),
        timeout
      ]);
  
      return {
        web: results[0],
        image: results[1],
        video: results[2]
      };
    } catch (error) {
      if (error.message === 'timeout') {
        throw error;
      }
      console.error('An error occurred:', error);
      throw error;
    }
  }