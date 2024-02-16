// function play() {
//     // Step-1: Hide the homescreen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // step:2 show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet: ', alphabet)

    const randomAlphabet = document.getElementById('current-alphabet');
    randomAlphabet.innerText = alphabet;

    setBackgroundColorId(alphabet);

}

function play() {
    hideElementId('home-screen');
    showElementId('play-ground');
    continueGame();
}