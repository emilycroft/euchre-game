class Round {
  constructor(playersArray){
    this.caller = null
    this.players = playersArray
    this.dealer = this.players[0]
    this.deck = new Deck()
    this.deal()
  }

  deal() {
    for (var i = 0; i < this.players.length; i++ ){
      this.players[i].addCards (this.deck.splice(0,5))
    }
    this.blind = this.deck
    this.bidding()
  }

  bidding() {
    debugger
    var topCard = this.blind.shift()
    this.trump  = topCard.suit
    GameController.controller.updateStatus(`The top card is ${topCard.cardName()}`)
    for (var i = 0; i < this.players.length; i++) {
      this.players[i].showCards()
    }
  }

  changeScore() {
    controller.game.score[team1] += 1
  }
}
