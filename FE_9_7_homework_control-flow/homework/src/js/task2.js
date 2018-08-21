let play, number, randomNumber
let min = 0, max = 5, one = 1, attemptsLeft = 3, totalPrize = 0, currentPrize = 10

play = confirm(`‘Do you want to play a game?’`)
    if (play) {

        randomNumber = Math.floor(Math.random() * (max - min + one)) + min

        while (attemptsLeft > 0){
                number = prompt('Enter a number from 0 to ' + max + '\r\nAttempts left: ' + attemptsLeft +
                '\r\nTotal prize: ' + totalPrize + '$\r\nPossible prize on current attempt: ' + currentPrize + '$',0);
            if (+number === randomNumber){
                totalPrize += currentPrize
                alert(`‘Congratulation!   Your prize is: ${totalPrize} Do you want to continue?’`)
                break
            } else {
                currentPrize = Math.floor(currentPrize/2)
            }
            attemptsLeft -= one
        }
            if (attemptsLeft === 0 && randomNumber !== number ){
                currentPrize = 0
            }
            alert(`‘Thank you for a game. Your prize is: ${currentPrize}`)

    } else {
        alert(`'You did not become a millionaire, but can.'`)
    }