class Round {
  constructor(playersArray){
    this.controller = GameController.controller
    this.caller = null
    this.players = playersArray.slice(0)
    this.dealer = this.players[0]
    this.deck = new Deck()
    this.counter = 0
    this.tricksWon = {team1: 0, team2: 0}
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
    GameController.controller.updateStatus(`The top card is the ${topCard.cardName()}`)
  }

  bidding() {
    this.controller.removeAllButtons('action-items')
    this.controller.removeAllButtons('player-actions')
    this.controller.hideCards()
    var player = this.players[0]
    this.controller.showHand(player)
    this.counter ++
    this.nextPlayer()
  }

  // selectSuit(){

  //   if (this.counter === 4) {
  //     this.controller.game.play()
  //     this.controller.game.round.bidding()

  //   } else {
  //     var player = this.players[0]
  //     this.controller.removeAllButtons('player-actions')
  //     this.controller.showHand(player)
  //     this.controller.selectSuit()
  //     this.nextPlayer()
  //     this.counter ++
  //   }
  // }

  dynamiteDynamic() {
    var that = GameController.controller.round
    that.trump = this.id
    that.startPlay()
  }

  nextPlayer() {
    var currentlyPlaying = this.players.shift()
    this.players.push(currentlyPlaying)
  }

  startPlay() {
    this.caller = this.players[3]
    this.resetPlayers()
    this.triggerPlay()
    this.nextPlayer()
  }

  triggerPlay() {
    this.controller.removeAllButtons('action-items')
    this.controller.removeAllButtons('player-actions')
    this.controller.hideCards();
    this.controller.showHand(this.players[0])
  }

  resetPlayers() {
    this.players = this.controller.game.players.slice(0)
  }

  changeScore() {
    controller.game.score[team1] += 1
  }
}
