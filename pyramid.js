function pyramid(char, height) {
    let result = '';
    
   for (let i = 0 ; i < height;i++) {
    let spaces = ' '.repeat((height -i-1)*char.length);
    let str = char.repeat(i*2+1);
    if (i !== char-1) {
        result += spaces + char + '\n';
    }else {
        result += spaces + char
    }
   }
    return result;
}
