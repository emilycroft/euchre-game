class Player {
  constructor(name, playerDiv){
    this.hand = []
    this.name = name
    this.controller = GameController.controller
    this.playerDiv = playerDiv
  }

  addCards(card) {
    this.hand.push(...card)
  }

  showCards(){
    this.controller.showHand(this.hand)
  }

}
