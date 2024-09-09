const invert = (obj) => {
const key = Object.keys(obj)
const value = Object.values(obj)

const store = {};

for (let i= 0; i < key.length;i++) {
    store[value[i]] = key[i]
}
return store
}

// const obje = {a : 2}
// console.log(invert(obje))