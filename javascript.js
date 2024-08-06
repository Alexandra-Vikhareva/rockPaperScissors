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