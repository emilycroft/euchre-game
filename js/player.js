class Player {
  constructor(name, playerDiv){
    this.hand = []
    this.name = name
    this.playerDiv = playerDiv
  }

  addCards(card) {
    this.hand.push(...card)
  }

  showCards(){
    GameController.controller.showHand(this.hand)
  }

}
