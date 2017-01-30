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
    this.playedCard(card)
    displayHand.bind( whatever the next player )



  }

  playedCard(card) {
    this.cardsPlayed.push(...card)
    console.log(this.cardsPlayed)
  }


  whoWon(){

  }
}