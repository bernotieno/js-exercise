function vowelDots(str) {
    const vowels = /[aeiouAEIOU]/g;
    
    return str.replace(vowels, '$&.');
}

console.log(vowelDots('hello')); // Output: "he.llo."
console.log(vowelDots('Vowel Dots')); // Output: "Vo.we.l Do.ts"
console.log(vowelDots('aeiou')); // Output: "a.e.i.o.u."
