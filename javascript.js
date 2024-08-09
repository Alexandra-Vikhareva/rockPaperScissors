function getComputerChoice() {
    let options = ['rock', 'scissors', 'paper'];
    return options[Math.floor(Math.random() * 3)]
};


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resTxt.textContent = `It's a tie! You both choose ${humanChoice}.`;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors'
            || humanChoice === 'scissors' && computerChoice === 'paper'
            || humanChoice === 'paper' && computerChoice === 'rock' ) {
                humanScore += 1;
                resTxt.textContent = `You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
                hScore.textContent = humanScore;
            }
    else {
        computerScore += 1;
        resTxt.textContent = `You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
        cScore.textContent = computerScore;
    };

    if (isOver()){
        if (humanScore > computerScore) {
            alert(`You Win!`)
        }
        else {
            alert(`You Lose!`)
        };

        humanScore = 0;
        hScore.textContent = humanScore;
        computerScore = 0;
        cScore.textContent = computerScore;
        resTxt.textContent = `To win you need to score 5 points.`;
    };
}; 

function isOver(){
    return (humanScore == 5 || computerScore == 5)
    };
    
const resTxt = document.querySelector('#text');
const rockBtn = document.querySelector('.rock.btn');
const paperBtn = document.querySelector('.paper.btn');
const scissorsBtn = document.querySelector('.scissors.btn');
const hScore = document.querySelector('.human.score');
const cScore = document.querySelector('.computer.score')

rockBtn.addEventListener('click', () => {playRound('rock', getComputerChoice())});
paperBtn.addEventListener('click', () => {playRound('paper', getComputerChoice())});
scissorsBtn.addEventListener('click', () => {playRound('scissors', getComputerChoice())});

let humanScore = 0,
    computerScore = 0;
