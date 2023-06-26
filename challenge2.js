function countVowel(str) { 

    
    const count = str.match(/[aeiou]/gi).length;

    
    return count;
}


const string = 'Hello World ';

const result = countVowel(string);

console.log(result);