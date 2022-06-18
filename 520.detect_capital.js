var detectCapitalUse = function (word) {

    const regex1 = /[A-Z]/g;
    const regex2 = /[a-z]/g;
    const modWord = word.substring(1);

    if (word.length === 1) { return true }

    if (word === word.toUpperCase() || word === word.toLowerCase()) {
        return true;
    }

    // console.log((word[0] === word[0].toLowerCase()) && regex1.test(word))
    if ((word.charAt(0) === word.charAt(0).toLowerCase()) && regex1.test(word)) {
        return false;
    }

    if (((word.charAt(0) === word.charAt(0).toUpperCase()) && regex2.test(word)) && !regex1.test(modWord)) {
        return true;
    }

    return false;


};