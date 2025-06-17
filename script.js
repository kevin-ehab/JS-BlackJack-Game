let array = []
let sum = 0
let cont = false

//function for a random card

function getRandom() {
    let x = Math.floor(Math.random() * 13 + 1)
    if (x === 1) {
        return 11
    } else if (x > 10) {
        return 10
    }
    return x
}

//Start function

function start() {
    document.getElementById("start-el").textContent = "Restart Game"
    document.getElementById("result-el").textContent = "Result: "
    document.getElementById("sum-el").textContent = "Sum: "
    document.getElementById("card-el").textContent = "Cards: "

    array = [getRandom(), getRandom()]
    sum = 0
    cont = true

    for (let i = 0; i < array.length; i++) {
        document.getElementById("card-el").textContent += array[i] + " "
        sum += array[i]
    }

    document.getElementById("sum-el").textContent = "Sum: " + sum

    if (sum < 21) {
        document.getElementById("result-el").textContent = "Result: Pick a new card"
    } else if (sum > 21) {
        document.getElementById("result-el").textContent = "Result: You lost"
        cont = false
    } else {
        document.getElementById("result-el").textContent = "Result: You won!"
        cont = false
    }
}

//New card function

function newCard() {
    if (!cont) return
    let card = getRandom()
    array.push(card)
    sum += card
    document.getElementById("card-el").textContent += card + " "
    document.getElementById("sum-el").textContent = "Sum: " + sum

    if (sum < 21) {
        document.getElementById("result-el").textContent = "Result: Pick a new card"
    } else if (sum > 21) {
        document.getElementById("result-el").textContent = "Result: You lost"
        cont = false
    } else {
        document.getElementById("result-el").textContent = "Result: You won!"
        cont = false
    }
}