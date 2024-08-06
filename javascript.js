function getComputerChoice() {
    let options = ['камень', 'ножницы', 'бумага'];
    return options[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    let answer
    while (1) {
        answer = prompt('Выберите "камень", "ножницы" или "бумагу"');
        answer = answer.toLowerCase().trim();
        if (answer === "камень" || answer ===  "ножницы" || answer === "бумага") {
            break
        }
    }
    return answer
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Ничья! Вы и компьютер выбросили ${humanChoice}.`);
        humanScore += 1;
        computerScore += 1;
    }
    else if (humanChoice === 'камень' && computerChoice === 'ножницы'
            || humanChoice === 'ножницы' && computerChoice === 'бумага'
            || humanChoice === 'бумага' && computerChoice === 'камень' ) {
                console.log(`Вы победили! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} бьёт ${computerChoice}.`);
                humanScore += 1;
            }
    else {
        console.log(`Вы проиграли! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} бьёт ${humanChoice}.`);
            computerScore += 1;
    };
}

let humanScore = 0,
    computerScore = 0;

let humanChoice = getHumanChoice(),
    computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
