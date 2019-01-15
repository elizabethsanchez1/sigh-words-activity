const letters = document.querySelectorAll('.letters');
const submitBtn = document.querySelector('.submit-btn');
const deleteBtn = document.querySelector('.delete-btn');
const restartBtn = document.querySelector('.restartbtn');
let guessList = document.querySelector('.list-of-guesses'); 
let word = localStorage.getItem('word');
let feedback = document.querySelector('.feed-back');
const letterGuesses = [];



localStorage.getItem('word');
console.log("got word", localStorage.getItem('word'));

// function displayGuesses() {
//   // letterGuesses;
//   // guessesContainer.innerHTM = ""; 
//   console.log("displayGuesses is working");
// };



console.log("letters:", letters);
for (i = 0; i < letters.length; i++) {
  letters[i].addEventListener('click', function(event) {
    letterGuesses.push(event.target.innerHTML);
    // console.log("event", event);
    // console.log("event-target", event.target.innerHTML);
    console.log("guesses", letterGuesses);
    //displayGuesses();
    let singleGuess = document.createElement('li');   
    singleGuess.innerHTML = event.target.innerHTML;
    guessList.insertAdjacentElement('beforeend', singleGuess);
   
    //console.log("---------singleGuess------------", singleGuess);
    console.log("----word-----", word);
    
    
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
    
  
   
    
    
 
  // console.log('letter has been clicked', event);
   console.log('event target', event.target.innerHTML); 
 });
};


submitBtn.addEventListener('click', function() {
  let guesses = letterGuesses.join('').toLowerCase();
  
  
  console.log("I'm the word", word);
  console.log('-------single string:-----', guesses);
  if (guesses === word) {
    feedback.innerHTML = "WINNER!";
   
  } else {
    feedback.innerHTML = "Try Again!";
  }
    
  


});


deleteBtn.addEventListener('click', function() {
  console.warn('letter guesses before pop: ', letterGuesses);
  letterGuesses.pop();
  //console.log("---guesslist last child---", guessList.lastChild);
  guessList.removeChild(guessList.lastChild);
  console.log("deleted letter-----", letterGuesses);
//   console.log('delete button was clicked');
//   console.log("-----Last child-------", guessList.lastElementChild);
});


restartBtn.addEventListener('click', function() {
  console.log('restart was clicked');
  window.location.href ="index.html";
});




/* 

On submit check whether the user has spelled the word correctly.

Use an alert box to tell the user whether they are right or wrong.




*/