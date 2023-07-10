 let player = {
 	name: "Harshit",
 	chips: 200
 }
 let cards = []
 let sum = 0
 let hasBlackjack = false
 let isAlive = false

 let message = ""

 let messageHr = document.getElementById("message-hr")
 let sumHr = document.getElementById("sum-hr")
 let cardHr = document.getElementById("card-hr")

 let playerHr = document.getElementById("player-hr")
 playerHr.textContent = player.name + ": $" + player.chips


 function getRandomCard() {
 	let random = (Math.floor(Math.random() * 13) + 1)
 	if (random === 1) {
 		return 11
 	} else if (random > 10) {
 		return 10
 	} else {
 		return random
 	}
 }


 function startGame() {
 	let isAlive = false
 	let firstCard = getRandomCard()
 	let secondCard = getRandomCard()

 	cards = [firstCard, secondCard]
 	sum = firstCard + secondCard

 	drawCard()
 }


 function drawCard() {
 	cardHr.textContent = "Cards: "
 	for (let i = 0; i < cards.length; i++) {
 		cardHr.textContent += cards[i] + " "
 	}

 	sumHr.textContent = "Sum: " + sum
 	if (sum <= 20) {
 		message = "Do you want to draw a new card?"
 	} else if (sum === 21) {
 		message = "You've got Blackjack!"
 		hasBlackJack = true
 	} else {
 		message = "You're out of the game!"
 		isAlive = false
 	}
 	messageHr.textContent = message
 }


 function newCard() {
 	if (sum > 0 && sum < 21) {
 		let card = getRandomCard()
 		sum += card
 		cards.push(card)

 		drawCard()
 	}
 }