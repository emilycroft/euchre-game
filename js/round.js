class Round {
  constructor(trump, dealer, playersArray){
    this.trump = trump
    this.dealer = dealer
    this.caller = null
    this.players = playersArray
    this.deck = new Deck()
    this.deal()
     }
    
  deal() {
    for (var i = 0; i < this.players.length; i++ ){
      this.players[i].addCards (this.deck.splice(0,5))
    }
    this.blind = this.deck
  }

  bidding() {
    var topCard = this.blind.shift()
    this.trump  = topCard.suit
    controller.updateStatus(`The top card is ${topCard.cardName()}`)
    for (var i = 0; i < this.players.length; i++) {
      this.players[i].showCards()
    }
  }
 
}



