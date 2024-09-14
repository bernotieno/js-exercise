function race(promises) {
    return new Promise((resolve, reject) => {
      if (promises.length === 0) {
        return;
      }
      promises.forEach(promise => {
        Promise.resolve(promise).then(resolve, reject);
      });
    });
  }
  
async function some(args, count) {
    if (!args.length || !count) return Promise.resolve([])
    let newArr = new Array(args.length)
    await new Promise((res, rej) => {
         args.forEach((promise, i) => {
             promise.then((x) => {
                newArr[i] = x
                count--
                if (count <= 0) return res()
            }, (y) => {
                newArr[i] = y
                count--
                if (count <= 0) return rej()
            })
        })
    })
    newArr = newArr.filter(x => x !== false)
    return newArr
}
  