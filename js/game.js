const suits = ["clubs", "spades", "hearts", "diamonds"]


const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
//

class Game {
  constructor() {
    this.playerOne = new Player()
    this.playerTwo = new Player()
    this.trump
  }

  start() {
    this.deck = new Deck()
    this.deal()
  }

  deal() {
    this.playerOne.addCards( this.deck.slice( 0, 26 ))
    this.playerTwo.addCards( this.deck.slice( 26 ))
  }

  play() {
    var shownCardOne = this.playerOne.hand.shift()
    var shownCardTwo = this.playerTwo.hand.shift()
    console.log(`player one's card was ${shownCardOne.cardName()}, player two's card was ${shownCardTwo.cardName()}`)
    playerOneController.showCard(shownCardOne)
    playerTwoController.showCard(shownCardTwo)
    this.checkWinner({ playerOne: shownCardOne, playerTwo: shownCardTwo})
    this.checkIfWon()
  }

  checkWinner(obj) {
    var cards = [obj.playerOne, obj.playerTwo]

    if (cards[0].value(trump) > cards[1].value()) {
      this.playerOne.addCards([shownCardOne, shownCardTwo])
      controller.updateStatus("Yay for player 1")
    } else if (cards[0].value(trump) < cards[1].value()) {
      this.playerTwo.addCards([shownCardOne, shownCardTwo])
      controller.updateStatus("Yay for player 2")
    } else if (cards[0].value(trump) === cards[1].value()) {
      this.playerOne.addCards([shownCardOne])
      this.playerTwo.addCards([shownCardTwo])
      controller.updateStatus("???????")
      }
    }
  

  checkIfWon() {
    if (this.playerOne.hand.length === 0) {
      controller.updateStatus("player 2 won")
      controller.button.remove()
    } else if (this.playerTwo.hand.length === 0) {
      controller.updateStatus("player 1 won")
      controller.button.remove()
    }
  }
}
