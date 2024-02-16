function hideElementId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvxyz';
    const alphabets = alphabetString.split('');

    // get a random index from 0 to 25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
    // console.log(alphabet[Math.round(Math.random() * alphabet.length)]);

}

// function getARandomAlphabet() {
//     const alphabetString = 'abcdefghijklmnopqrstuvxyz';
//     const alphabets = alphabetString.split('');

//     const randomNumber = Math.random() * 25
//     const index = Math.round(randomNumber);

//     const alphabet = alphabets[index];
//     return alphabet;
// }