const palindromes = function (word) {
    const formattedWord = word
        .replace(/\s/g, '')
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    console.log(formattedWord);
    return formattedWord === formattedWord.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
