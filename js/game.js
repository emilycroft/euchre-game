const suits = ["clubs", "spades", "hearts", "diamonds"]


const values = [9, 10, 'J', 'Q', 'K', 'A']
//

class Game {
  constructor() {
    this.playerOne = new Player('playerOne')
    this.playerTwo = new Player('playerTwo')
    this.playerThree = new Player('playerThree')
    this.playerFour = new Player('playerFour')
    this.players = [this.playerOne, this.playerTwo, this.playerThree, this.playerFour]
    this.score = {team1: 0, team2: 0}
    this.winner = null
  }

  play() {
    // while (i < 5 || this.winner === null) {
    debugger
      let round = new Round(this.players)
      let player = this.players.shift()
      this.players.push(player)
    // }
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
      return
    } else if (this.playerTwo.hand.length === 0) {
      controller.updateStatus("player 1 won")
      controller.button.remove()
    }
  }
}
