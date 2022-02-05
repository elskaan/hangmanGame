let letters = 'abcdefghijklmnopqrstuvwxyz';
let lettersArr = Array.from(letters);
let lettersContainer = document.querySelector('.letters');

lettersArr.forEach(letter => {
    let span = document.createElement('span');
    let letterNode = document.createTextNode(letter);
    span.appendChild(letterNode);
    span.className = 'letter-box';
    lettersContainer.appendChild(span);
});

const words = {
    programming: ['php', 'javascript', 'go', 'ring', 'python', 'nodejs', 'reactjs', 'vuejs', 'ruby on rails'],
    countries: ['egypt', 'Ksa', 'qatar', 'libya', 'mali', 'sudan', 'saudi arabia'],
    persons: ['ahmed', 'aya', 'talia', 'basma', 'mohamed', 'yasser', 'yasmeen', 'tom cruz'],
    films: ['tito', 'harry potter', 'game', 'exam', 'prestige', 'batman', 'spiderman'],
    animals: ['donkey', 'dog', 'cat', 'tutrel']
}

let allWords = Object.keys(words);

let randomNum = Math.floor(Math.random() * allWords.length);

let randomPropName = allWords[randomNum];

let randomPropVal = words[randomPropName];

let randomvalNum = Math.floor(Math.random() * randomPropVal.length);

let randomPropval2 = randomPropVal[randomvalNum]

document.querySelector('.game-info span').innerHTML = randomPropName;

// create letters guess

let lettersGuessElement = document.querySelector('.letters-guess');

let randomArrayLetters = Array.from(randomPropval2);

randomArrayLetters.forEach(letter => {
    // create span
    let span = document.createElement('span');

    if (letter === ' '){
        span.className = 'with-space'
    }

    lettersGuessElement.appendChild(span);
});
let allSapns = document.querySelectorAll('.letters-guess span');
let wrongAttempt = 0;
let theDraw = document.querySelector('.hangman-draw')
// handle clicking on letters
document.addEventListener('click', e => {
    let thestatus = false;
    if(e.target.className === 'letter-box'){
        e.target.classList.add('clicked');

        // get clicked letter

        let clickedLetter = e.target.innerHTML.toLowerCase();
        randomArrayLetters.forEach((word, wordIndex) => {
            if(clickedLetter === word) {
                thestatus = true
                allSapns.forEach((span, index) => {
                    if (wordIndex === index){
                        span.innerHTML = clickedLetter;
                    }
                });
            }
        });
        if(thestatus !== true) {
            wrongAttempt++;
            theDraw.classList.add(`wrong-${wrongAttempt}`);
            document.getElementById('fail').play();
            
            if (wrongAttempt === 8) {
                endGame();
                lettersContainer.classList.add('finished');
            }
        }else {
            document.getElementById('success').play();
        }
    }
});

function endGame() {
    let div = document.createElement('div');
    let divText = document.createTextNode(`Game over, The word is ${randomPropval2}`);
    div.appendChild(divText);
    div.className = 'popup';
    document.body.appendChild(div);
}