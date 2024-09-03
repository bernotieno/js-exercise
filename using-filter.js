const filterShortStateName = (arr) => arr.filter(str => str.length < 7);
const filterStartVowel = (arr) => arr.filter(str => /^[aeiou]/i.test(str));

const filter5Vowels = (arr) => {
    const vowelCount = (str) => (str.match(/[aeiou]/gi) || []).length;
    return arr.filter(str => vowelCount(str) >= 5);
};

const filter1DistinctVowel = (arr) => {
    const distVowel = (str) => {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
        const distinctOne = new Set(str.toLowerCase().split('').filter(char => vowels.has(char)));
        return distinctOne.size;
    };
    return arr.filter(str => distVowel(str) === 1);
};

const multiFilter = (arr) => {
    return arr.filter(obj => {
        return(
            obj.capital.length >= 8 &&
            !/^[aeiou]/i.test(obj.name) &&
            /[aeiou]/i.test(obj.tag) &&
            obj.region !== 'South'
        );
    });
};