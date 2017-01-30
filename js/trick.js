class Trick {

  constructor(firstPlayer) {
    this.cardsPlayed = []
    this.firstPlayer = firstPlayer
  }

  //round will keeep track of how many tricks each team wins
  // trick will know which team won it
  // first card played/ what suit

  playCard(index, player) {
    let playerIndex = GameController.controller.game.players.indexOf(player)
    let card = player.hand.splice(index, 1)
    let nextPlayer

    this.playedCard({player: player, card: card[0]})

    if (playerIndex === 3) {
      nextPlayer = GameController.controller.game.players[0]
    } else {
      nextPlayer = GameController.controller.game.players[playerIndex + 1]
    }
    if (this.cardsPlayed.length === 4) {
      this.whoWon()
    } else {
      GameController.controller.displayCards.bind(nextPlayer)()
    }   
  }

  playedCard(card) {
    this.cardsPlayed.push(card)
  }


  whoWon(){
    var theWinner = {card: new Card(null, null, 0)}

    for (var i = 0; i < this.cardsPlayed.length; i++) {
      if (theWinner.card.value() < this.cardsPlayed[i].card.value()) {
        theWinner = this.cardsPlayed[i]
      }
    }
    GameController.controller.trickWinner(theWinner.player)
  }
}
