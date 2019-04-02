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
		letterGuesses.push(event.target.innerHTML);
		let singleGuess = document.createElement('li');
		singleGuess.innerHTML = event.target.innerHTML;
		guessList.insertAdjacentElement('beforeend', singleGuess);

		let correctGuess = true;

		for (i = 0; i < letterGuesses.length; i++) {

			if (letterGuesses[i].toLowerCase() !== word[i]) {
				correctGuess = false;
				feedback.innerHTML = 'OOPS Guess Again!';
				console.log('not all guesses are correct');

			} else {
				feedback.innerHTML = 'Good Guess!';
			}

		};


		console.log('event target', event.target.innerHTML);
	});
};

submitBtn.addEventListener('click', function () {
	let guesses = letterGuesses.join('').toLowerCase();


	console.log("I'm the word", word);
	console.log('-------single string:-----', guesses);
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
	console.log('restart was clicked');
	window.location.href = "index.html";
});
