//global variables to store the player and computer score
let compScore=0;
let playerScore=0;
let playerChoice;
// buttons variables
const rock=document.querySelector('#rock');
const paper=document.querySelector('#paper');
const scissors=document.querySelector('#scissors');
const result= document.querySelector('#result');
const playerScoreGUI=document.querySelector('#playerScore');
const compScoreGUI=document.querySelector('#compScore');
const scoreContainer=document.querySelector('#score');
//a function that will generate random choice between rock paper and scissors
function computerChoice(){
let compChoice='';
let random=Math.floor(Math.random()*3);
random === 0 ? compChoice='rock' : random ===1 ? compChoice='paper' : compChoice ='scissors';
return compChoice;}

// the main function of the game
function game(){
let compChoice=computerChoice();

if(compChoice ==='rock' && playerChoice==='paper'){ 
playerScore++;
result.textContent=
'Result: Computer Chose Rock "Paper Beats Rock! you won"' ;
playerScoreGUI.textContent= `Your Score:${playerScore} `;
compScoreGUI.textContent= `Computer Score:${compScore}`;
}
else if(compChoice ==='rock' && playerChoice==='rock'){ 
result.textContent=
`Result: Computer Chose Rock "it's a tie !!"`;
playerScoreGUI.textContent= `Your Score: ${playerScore} `;
compScoreGUI.textContent= `Computer Score: ${compScore}`;
}
else if(compChoice ==='rock' && playerChoice==='scissors'){
compScore++;
result.textContent= 
'Result: Computer Chose Rock "Rock beats Scissors! Computer won"'
playerScoreGUI.textContent= `Your Score: ${playerScore} `;
compScoreGUI.textContent= `Computer Score: ${compScore}`;
}
else if(compChoice ==='paper' && playerChoice==='paper'){
 result.textContent= 
 `Result: Computer Chose Paper "it's a tie !!"`;
 playerScoreGUI.textContent= `Your Score: ${playerScore} `;
compScoreGUI.textContent= `Computer Score: ${compScore}`;
}
else if(compChoice ==='paper' && playerChoice==='rock'){
compScore++;
result.textContent= 
'Result: Computer Chose paper "Paper Beats Rock! Computer won"';
playerScoreGUI.textContent= `Your Score: ${playerScore} `;
compScoreGUI.textContent= `Computer Score: ${compScore}`;
}
else if(compChoice ==='paper' && playerChoice==='scissors'){
playerScore++;
result.textContent= 
'Result: Computer Chose paper "Scissors beats paper! you won"';
playerScoreGUI.textContent= `Your Score: ${playerScore} `;
compScoreGUI.textContent= `Computer Score: ${compScore}`; 
}
else if(compChoice ==='scissors' && playerChoice==='paper'){
compScore++;
result.textContent=
'Result: Computer Chose Scissors "Scissors beats paper! Computer won"';
playerScoreGUI.textContent= `Your Score: ${playerScore} `;
compScoreGUI.textContent= `Computer Score: ${compScore}`;
}
else if(compChoice ==='scissors' && playerChoice==='rock'){
playerScore++;
 result.textContent= 
 'Result: Computer Chose scissors "Rock beats Scissors! you won"';
 playerScoreGUI.textContent= `Your Score: ${playerScore} `;
compScoreGUI.textContent= `Computer Score: ${compScore}`;
}
else if(compChoice ==='scissors' && playerChoice==='scissors'){
    result.textContent= 
    `Result: Computer Chose Scissors "it's a tie !!"`;
    playerScoreGUI.textContent= `Your Score: ${playerScore} `;
compScoreGUI.textContent= `Computer Score: ${compScore}`;
}
}

// finally a function to play the game() function for only 5 rounds and then report the score
function round(){
if(compScore<4 && playerScore<4){game()}
else if(compScore===4){
    compScoreGUI.textContent= `Computer Score: 5`;
    let compWon= document.createElement('p');
    compWon.textContent='This Round is Over! Computer Won'
    scoreContainer.appendChild(compWon);
    let refreshButton=document.createElement('button');
    refreshButton.textContent='Restart Game';
    scoreContainer.appendChild(refreshButton);
    refreshButton.addEventListener('click',function(){location.reload()});

}
else if(playerScore===4){
    playerScoreGUI.textContent= `Your Score: 5 `;
    let playerWon=document.createElement('p');
    playerWon.textContent='This Round is Over! You won'
    scoreContainer.appendChild(playerWon);
    let refreshButton=document.createElement('button');
    refreshButton.textContent='Restart Game';
    scoreContainer.appendChild(refreshButton);
    refreshButton.addEventListener('click',function(){location.reload()});

}
}



//event listiners for the buttons
rock.addEventListener('click', function(){playerChoice='rock'});
paper.addEventListener('click', function(){playerChoice='paper'});
scissors.addEventListener('click', function(){playerChoice='scissors'});

rock.addEventListener('click',round);
paper.addEventListener('click', round);
scissors.addEventListener('click',round);



