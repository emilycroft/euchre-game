class Round {
  constructor(playersArray){
    this.controller = GameController.controller
    this.caller = null
    this.players = playersArray.slice(0)
    this.dealer = this.players[0]
    this.deck = new Deck()
    this.nextPlayer()
    this.deal()
  }

  deal() {
    for (var i = 0; i < this.players.length; i++ ){
      this.players[i].addCards (this.deck.splice(0,5))
    }
    this.blind = this.deck
    this.showTrump()
  }

  showTrump() {
    var topCard = this.blind.shift()
    this.trump  = topCard.suit
    GameController.controller.updateStatus(`The top card is ${topCard.cardName()}`)
  }

  bidding() {
    //check if there's been a complete round of bidding or not
    this.controller.removeAllButtons('action-items')
    this.controller.removeAllButtons('player-actions')
    var player = this.players[0]
    this.controller.showHand(player)
    this.controller.addBiddingButtons()
    this.nextPlayer()
  }


  nextPlayer() {
    var currentlyPlaying = this.players.shift()
    this.players.push(currentlyPlaying)
  }

  startPlay() {
    this.resetPlayers()
    this.nextPlayer()
  }

  resetPlayers() {
    this.players = playersArray.slice(0)

  }

  changeScore() {
    controller.game.score[team1] += 1
  }
}
