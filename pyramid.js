function pyramid(char, height) {
    let result = '';
    
   for (let i = 0 ; i < height;i++) {
    let spaces = ' '.repeat((height -i-1)*char.length);
    let str = char.repeat(i*2+1);
    if (i !== height-1) {
        result += spaces + str + '\n';
    }else {
        result += spaces + str
    }
   }
    return result;
}
console.log(pyramid("{}",12))