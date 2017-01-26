const suits = ["clubs", "spades", "hearts", "diamonds"]


const values = [9, 10, 'J', 'Q', 'K', 'A']
//

class Game {
  constructor() {
    this.playerOne = new Player()
    this.playerTwo = new Player()
    this.playerThree = new Player()
    this.playerFour = new Player()
    this.team1 = [this.playerOne, this.playerTwo]
    this.team2 = [this.playerThree, this.playerFour]
    this.trump
  }

  start() {
    this.deck = new Deck()
    this.deal()
  }

  deal() {
    this.playerOne.addCards( this.deck.slice( 0, 5 ))
    this.playerTwo.addCards( this.deck.slice( 5, 10 ))
    this.playerThree.addCards( this.deck.slice( 10, 15 ))
    this.playerFour.addCards( this.deck.slice( 15, 20 ))
    this.blind = this.deck.slice( 20 )
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
    var trump = this.trump
    if (cards[0].value(trump) > cards[1].value(trump)) {
      this.playerOne.addCards(cards)
      controller.updateStatus("Yay for player 1")
    } else if (cards[0].value(trump) < cards[1].value(trump)) {
      this.playerTwo.addCards(cards)
      controller.updateStatus("Yay for player 2")
    } else if (cards[0].value(trump) === cards[1].value(trump)) {
      this.playerOne.addCards([cards[0]])
      this.playerTwo.addCards([cards[1]])
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
