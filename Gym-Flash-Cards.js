//lets get em to flip or slowly reveal on click
//shuffle
//highlight when theyre correct(green)
//highlight when theyre wrong (red)
//randomize
//get them seperate or together
//
//
//
let cardToCheck = null;
let totalClicks = 0;
let totalRemaining = null;
let matchedCards = [];
let busy = true;
// class gymFlashCards{
//     constructor(totalTime, cards){
//         this.cardsArray = cards;
//         this.totalTime = totalTime;
//         this.timeRemaining = totalTime;
//         this.timer = document.getElementById('time-remaining');
//         this.ticker = document.getElementById('flips');

//     }
//     //startGame(){
//    //     this.cardToCheck = null;
//     //    this.totalClicks = 0;
//     //    this.totalRemaining = this.totalTime;
//     //    this.matchedCards = [];
//     //    this.busy = true;
        
//     //    setTimeout(()=>{
//      //       this.shuffleCards();
//     //        this.countDown = this.startCountDown();
//     //        this.busy = false;
//     //    }, 500);
//     //    this.hideCards()
//     //    this.timeRemaining.innerText = this.timeRemaining
//     //    this.ticker.innerText = this.totalClicks
//     //}

//     hideCards(){
//         this.cardsArray.forEach(card =>{
//             card.classList.remove('visible')
//             card.classList.remove('matched')
//         })
//     }
//     flipCard(card){
//         if(this.canFlipCard(card)){
            
//             this.totalClicks++;
//             this.ticker.innerText = this.totalClicks;
//             card.classList.add('visible')
//             if(this.cardToCheck)
//                 this.checkForCardMatch(card);
//             else
//                  this.cardToCheck = card
//         }
//     }
//     checkForCardMatch(card){
//         //if();
//     }

//     getCardType(card){
//         return card.getElementsByClassName()
//     }

//     //startCountDown(){
//     //    return setInterval(()=>{
//     //        this.timeRemaining--
//     //        this.timer.innerText = this.timeRemaining;
//     //        if(this.timeRemaining === 0)
//     //            this.gameOver();
//     //    }, 1000)
//     //}

//     gameOver(){
//         clearInterval(this.countDown);
//         document.getElementById('gameOverText').classList.add('visible')
//     }

//     victory(){
//         clearInterval(this.countDown);
//         document.getElementById('victoryText').classList.add('visible')
//     }

//     //shuffleCards(){
//     //    for(let i = this.cardsArray.length - 1; i > 0; i--){
//     //        let randIndex = Math.floor(Math.random() * (i+1));
//     //        this.cardsArray[randIndex].style.order = i;
//     //        this.cardsArray[i].style.order = randIndex;
//     //    }
//     //}

//     canFlipCard(card){
//         //return true;
//         return (!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck);
//     }
    
// }
function startGame() {
    console.log("start game working")
    cardToCheck = null;
    totalClicks = 0;
    totalRemaining = 100;
    matchedCards = [];
    busy = true;

    document.getElementById('gameOverText').style.display = "none";
    document.getElementById('victoryText').style.display = "none"
  
    setTimeout(() => {
      //shuffleCards();
      let countDown = startCountDown();
      busy = false;
    }, 500);
    //hideCards()
    //this.timeRemaining.innerText = this.timeRemaining
    //this.ticker.innerText = this.totalClicks
  }
  function ready(){
    let overlays = Array.from(document.getElementsByClassName('overlayText'));
    let cards = Array.from (document.getElementsByClassName('card'));
    console.log(cards)
    //let game = new gymFlashCards(100, cards)
    overlays.forEach(overlays =>{
        overlays.addEventListener('click', ()=>{
            overlays.classList.remove('visible');
            startGame();
        })
    })
    cards.forEach(cards =>{
        cards.addEventListener('click', ()=>{
            game.flipCard(cards);
        })
    })
}
  
  function hideCards(){
  //this.timeRemaining.innerText = this.timeRemaining
  //this.ticker.innerText = this.totalClicks
  }
  function startCountDown(){
    return setInterval(()=>{
       timeRemaining-- 
       timer.innerText = timeRemaining;
       if(timeRemaining === 0)
            gameOver();
    }, 1000)
}

  function shuffleCards(){
    for(let i = cards.length - 1; i > 0; i--){
        let randIndex = Math.floor(Math.random() * (i+1));
        this.cards[randIndex].style.order = i;
        this.cards[i].style.order = randIndex;
    }
}
// function ready(){
//     let overlays = Array.from(document.getElementsByClassName('overlayText'));
//     let cards = Array.from (document.getElementsByClassName('card'));
//     console.log(cards)
//     //let game = new gymFlashCards(100, cards)
//     overlays.forEach(overlays =>{
//         overlays.addEventListener('click', ()=>{
//             overlays.classList.remove('visible');
//             startGame();
//         })
//     })
//     cards.forEach(cards =>{
//         cards.addEventListener('click', ()=>{
//             game.flipCard(cards);
//         })
//     })
// }

if(document.readyState === 'loading'){
   document.addEventListener ('DOMContentLoaded', ready());
} else {
   ready();
}

//new gymFlashCards(100, cardArray)