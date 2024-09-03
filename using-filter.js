function filterShortStateName(arr) {
    return arr.filter(state => state.length < 7);
  }

  function filterStartVowel(arr) {
    return arr.filter(str => /^[aeiou]/i.test(str));
  }

  function filter5Vowels(arr) {
    return arr.filter(str => (str.match(/[aeiou]/gi) || []).length >= 5);
  }

  function filter1DistinctVowel(arr) {
    return arr.filter(str => {
      const vowels = str.match(/[aeiou]/gi) || [];
      return new Set(vowels).size === 1;
    });
  }

  function multiFilter(arr) {
    return arr.filter(obj => 
      obj.capital.length >= 8 &&
      !/^[aeiou]/i.test(obj.name) &&
      /[aeiou]/i.test(obj.tag) &&
      obj.region !== "South"
    );
  }
  