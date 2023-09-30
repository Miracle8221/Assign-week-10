import { gameOver } from "./eventHandlers.js";
// import { winner } from "./choiceFunctions.js";
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
    // function to play
const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissor');
    const playerOptions = [rockBtn,paperBtn,scissorBtn];
    const computerOptions = ['rock','paper','scissors']
    // function to start playing game
    
    playerOptions.forEach(option => {
        option.addEventListener('click',function(){
            const movesLeft = document.querySelector('.movesleft');
            moves++;
            movesLeft.innerText = `Moves Left: ${10-moves}`;
            const choiceNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[choiceNumber];
            // function to check who wins
            winner(this.innerText,computerChoice)
            // calling gameover function after 10 moves
            if(moves == 10){
                gameOver(playerOptions,movesLeft);
            }
        })
    })
    }
    // function to decide winner
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Tie'
        }
        else if (player == 'rock'){
            if (computer == 'paper'){
                result.textContent = 'Computer won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            } 
        }
    }
    
    // function to run when the game is over
    
    
    // calling playgame function inside game
    playGame();

}
// callling game function
game();
