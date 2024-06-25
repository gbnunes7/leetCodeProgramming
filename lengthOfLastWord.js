// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
// consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    const stringSeparada = s.split(' ')
    let stringSemEspaco = stringSeparada.filter(x => x.trim() !== "");
    const ultimaPalavra = stringSemEspaco[stringSemEspaco.length -1]
    return ultimaPalavra.length 
}

// Runtime: 58ms Memory:48.8mb