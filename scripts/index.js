/**
 * index.js
 * - All our useful JS goes here, awesome!
 */


/* 
1. make sure everything is formatted properly 
2. Make sure any variable that is properly use
	const & let 
3. Remove all the global variables 
4. Look at where you can simplify logic
5. remove console.logs() and uncesssary code


*/


const sighWords = ["see", "like", "we", "what", "me", "find", "now", "will", "this", "make", "she", "play", "down", "said", "help", "look", "have", "is", "he", "test"];
const rightArrow = document.querySelector('.fa-caret-right');
const leftArrow = document.querySelector('.fa-caret-left');
const startbtn = document.querySelector('.startbtn');
const playActivity = document.querySelector('.play-activity');
let currentIndex = 0;
let shuffledArray = [];


playActivity.addEventListener('click', function () {
	localStorage.word = shuffledArray[currentIndex];

});

function getShuffledArray(arr) {
	// copies array in order to shuffle the words. sighwords array stays the same
	let newArr = [...arr]
	for (let i = newArr.length - 1; i > 0; i--) {
		const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
	}
	return newArr;
}

function updateCenterText(word) {
	const wordContainer = document.querySelector('.word');
	wordContainer.innerHTML = word;

}

startbtn.addEventListener('click', function () {
	const hiddenItems = document.querySelectorAll('.hidden');
	shuffledArray = getShuffledArray(sighWords);
	updateCenterText(shuffledArray[currentIndex]);
	hiddenItems.forEach(function (items) {
		items.style.display = 'flex';
	});
});


rightArrow.addEventListener('click', function () {

	if (currentIndex > shuffledArray.length - 2) {
		currentIndex = -1;
	}
	currentIndex = currentIndex + 1;
	let nextWord = shuffledArray[currentIndex];
	updateCenterText(nextWord);

});

leftArrow.addEventListener('click', function () {

	if (currentIndex === 0) {
		let lastWord = shuffledArray[shuffledArray.length - 1];
		updateCenterText(lastWord);
		currentIndex = shuffledArray.length - 1;
		return;
	}
	currentIndex = currentIndex - 1;
	let previousWord = shuffledArray[currentIndex];
	updateCenterText(previousWord);

});
