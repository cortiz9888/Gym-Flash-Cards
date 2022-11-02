//lets get em to flip or slowly reveal on click
//shuffle
//highlight when theyre correct(green)
//highlight when theyre wrong (red)
//randomize
//get them seperate or together
//
//
//
const cards = document.querySelectorAll('.card');    
let cardToCheck = null;
let totalClicks = 0;
let totalRemaining = null;
let matchedCards = [];
let busy = true;
//let lockBoard = false;
let hasFlipped = false;
let firstChoice, secondChoice;
let flippedCard = [];

alert('How to Play Gym-Flash-Cards: Try to find the card with the muscle group and match it with the workout associated with that muscle. good luck!!')

function startGame() {
    console.log("start game working")
    cardToCheck = null;
    totalClicks = 0;
    totalRemaining = 100;
    matchedCards = [];
    busy = true;

    ready();

   }
  function ready(){
    let cards = Array.from (document.getElementsByClassName('card'));
    console.log(cards)

    cards.forEach(card =>{
        card.addEventListener('click', ()=>{
            flipCard(card);
        })
    })
}
  function flipCard(card){
    console.log(card)
    console.log(card.firstElementChild)
    card.firstElementChild.style.transform = 'rotateY(-180deg)'
    card.lastElementChild.style.transform = 'rotateY(0deg)'
    flippedCard.push(card);
    // console.log(flippedCard[0] + '0')
    // console.log(flippedCard[1] + '1')
      if(flippedCard.length >= 2){
        if (flippedCard[0].getElementsByTagName('div').item(0).id === card.getElementsByTagName('div').item(0).id){
          console.log(flippedCard[0].getElementsByTagName('div').item(0).id)
          console.log(card.getElementsByTagName('div').item(0).id)
          matchCards(flippedCard[0], card);
            //flippedCard.pop();
            // console.log(flippedCard[0].getElementsByTagName('div').item(0).id)
            // console.log(card.getElementsByTagName('div').item(0).id)
        }else {
          console.log(flippedCard[0].getElementsByTagName('div').item(0).id)
          console.log(card.getElementsByTagName('div').item(0).id)
          hideCards(flippedCard[0], card);
          //flippedCard.pop();
          console.log('not matched')
          // console.log(flippedCard[0].getElementsByTagName('div').item(0).id)
          // console.log(card.getElementsByTagName('div').item(0).id)
        }
  }
      // if (lockBoard) {return;}                //lock board to prevent revealing of other cards after 2 have been selected.
      // if (this === firstCard) {return;}  //Prevents double-click on same card

  
      // if (!hasFlipped) {                      //Allows for toggle between first card clicked and second card clicked. (has first card been clicked? true or false.)
      //     hasFlipped = true;
      //     firstCard = this;                   // First clicked card
      //     // console.log(hasFlipped, firstCard);
      //     return;
      // }
      // hasFlipped = false;
      // secondCard = this;                     //Second clicked card
      // checkMatch();
  }
  
function matchCards(firstChoice, secondChoice){
  flippedCard = []

}

  function hideCards(firstChoice, secondChoice){
    setTimeout(()=>{ firstChoice.lastElementChild.style.transform = 'rotateY(180deg)'
    secondChoice.firstElementChild.style.transform = 'rotateY(0deg)'

    firstChoice.firstElementChild.style.transform = 'rotateY(0deg)'
    secondChoice.lastElementChild.style.transform = 'rotateY(180deg)'
    flippedCard = []}, 500)
    
  }
//   function startCountDown(){
//     return setInterval(()=>{
//        timeRemaining-- 
//        timer.innerText = timeRemaining;
//        if(timeRemaining === 0)
//             gameOver();
//     }, 1000)
// }

//   function shuffleCards(){
//     for(let i = cards.length - 1; i > 0; i--){
//         let randIndex = Math.floor(Math.random() * (i+1));
//         this.cards[randIndex].style.order = i;
//         this.cards[i].style.order = randIndex;
//     }
// }


// if(document.readyState === 'loading'){
//    document.addEventListener ('DOMContentLoaded', ready());
// } else {
//    ready();
// }

