class Round {
  constructor(playersArray){
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
    var topCard = this.blind.shift()
    this.trump  = topCard.suit
    GameController.controller.updateStatus(`The top card is ${topCard.cardName()}`)
    for (var i = 0; i < this.players.length; i++) {
      this.players[i].showCards()
    }
    this.bidding()
  }

  bidding() { 
    var player = this.players[0]
    GameController.controller.makeButton(player.playerDiv)
    this.nextPlayer()
  }

  nextPlayer() {
    var currentlyPlaying = this.players.shift()
    this.players.push(currentlyPlaying) 
  }

  


  changeScore() {
    controller.game.score[team1] += 1
  }
}
