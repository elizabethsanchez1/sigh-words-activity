const submitBtn = document.querySelector('.submit-btn');
const deleteBtn = document.querySelector('.delete-btn');
const restartBtn = document.querySelector('.restartbtn');
let word = localStorage.getItem('word');
let feedback = document.querySelector('.feed-back');
const letterGuesses = [];



localStorage.getItem('word');
let guessList = document.querySelector('.list-of-guesses');

const letters = document.querySelectorAll('.letters');
for (i = 0; i < letters.length; i++) {
	letters[i].addEventListener('click', function (event) {
		
		console.log('event: ', event);
		
		letterGuesses.push(event.target.innerHTML);
		let singleGuess = document.createElement('li');
		singleGuess.innerHTML = event.target.innerHTML;
		guessList.insertAdjacentElement('beforeend', singleGuess);

		let correctGuess = true;

		for (i = 0; i < letterGuesses.length; i++) {

			if (letterGuesses[i].toLowerCase() !== word[i]) {
				correctGuess = false;
				feedback.innerHTML = 'OOPS Guess Again!';

			} else {
				feedback.innerHTML = 'Good Guess!';
			}
		};
	});
};


submitBtn.addEventListener('click', function () {
	let guesses = letterGuesses.join('').toLowerCase();

	if (guesses === word) {
		feedback.innerHTML = "WINNER!";

	} else {
		feedback.innerHTML = "Try Again!";
	}

});

deleteBtn.addEventListener('click', function () {
	let guessList = document.querySelector('.list-of-guesses');
	letterGuesses.pop();
	guessList.removeChild(guessList.lastChild);

});

restartBtn.addEventListener('click', function () {
	window.location.href = "index.html";
});
