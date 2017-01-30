class Trick {

  constructor(firstPlayer) {
    this.cardsPlayed = []
    this.firstPlayer = firstPlayer
  }

  //round will keeep track of how many tricks each team wins
  // trick will know which team won it
  // first card played/ what suit

  playedCard(card) {
    this.cardsPlayed.push(card)
  }

  whoWon(){

  }
}