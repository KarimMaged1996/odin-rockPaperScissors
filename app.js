//global variables to store the player and computer score
let compScore=0;
let playerScore=0;

//a function that will generate random choice between rock paper and scissors
function computerChoice(){
let compChoice='';
let random=Math.floor(Math.random()*3);
random === 0 ? compChoice='Rock' : random ===1 ? compChoice='Paper' : compChoice ='Scissors';
return compChoice;}

// the main function of the game
function game(){
let compChoice=computerChoice();
let playerChoice= prompt('your turn Choose "Rock, Paper or Scissors"').toLowerCase();

if(compChoice.toLowerCase()==='rock' && playerChoice==='paper'){ 
playerChoice++;
return 'Paper Beats Rock! you won' 
}
else if(compChoice.toLowerCase()==='rock' && playerChoice==='rock'){ 
return 'its a tie !!'
}
else if(compChoice.toLowerCase()==='rock' && playerChoice==='scissors'){
compScore++;
 return 'Rock beats Scissors! Computer won'
}
else if(compChoice.toLowerCase()==='paper' && playerChoice==='paper'){
 return 'its a tie !!'
}
else if(compChoice.toLowerCase()==='paper' && playerChoice==='rock'){
compScore++;
 return 'Paper Beats Rock! Computer won'
}
else if(compChoice.toLowerCase()==='paper' && playerChoice==='scissors'){
playerScore++;
 return 'Scissors beats paper! you won' 
}
else if(compChoice.toLowerCase()==='scissors' && playerChoice==='paper'){
compScore++;
 return 'Scissors beats paper! Computer won'
}
else if(compChoice.toLowerCase()==='scissors' && playerChoice==='rock'){
playerScore++;
 return 'Rock beats Scissors! you won'
}
else if(compChoice.toLowerCase()==='scissors' && playerChoice==='scissors'){
 return 'its a tie !!'
}
}

// finally a function to play the game() function for only 5 rounds and then report the score
function round(){
for(let i=0; i<5;i++){
console.log(game());}
return playerScore===compScore ? 'This round is over! it is a tie' :playerScore>compScore ? 'This round is over! You Won' : 'This round is over! Computer Won' 
}