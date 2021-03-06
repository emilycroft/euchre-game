const suits = ["clubs", "spades", "hearts", "diamonds"]

const values = [9, 10, 'Jack', 'Queen', 'King', 'Ace']

class Game {
  constructor() {
    this.playerOne = new Player('Player One')
    this.playerTwo = new Player('Player Two')
    this.playerThree = new Player('Player Three')
    this.playerFour = new Player('Player Four')
    this.players = [this.playerOne, this.playerTwo, this.playerThree, this.playerFour]
    this.score = {team1: 0, team2: 0}
    this.winner = null
    this.controller = GameController.controller
  }

  play() {
      this.resetHands()
      this.round = new Round(this.players)
      let player = this.players.shift()
      this.players.push(player)
  }

  resetHands() {
    for (var i = 0; i < this.players.length; i++) {
      this.players[i].hand = []
    }
  }


}
